const { strictEqual } = require('assert')

const { mockUsers } = require('../../../Mocks')

const { getAllUsers } = require('../../../../src/Core/Users/Repository')

const scope = 'Users'
const layer = 'Repository'
const feature = 'getAllUsers'

const output = {}
const mockClient = {}

describe(`${scope}/${layer}/${feature}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getAllUsers === 'function'
        strictEqual(actual, true, `${feature} is not a function`)
    })

    it(`Should not throw on success`, async () => {
        mockClient.query = () => Promise.resolve()
        await getAllUsers({ client: mockClient })
            .catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `Threw on success`)
    })

    it(`Should return an array on success`, async () => {
        mockClient.query = () => Promise.resolve([])
        output.res = await getAllUsers({ client: mockClient })
            .catch(err => output.err = err || true)
        const actual = Array.isArray(output.res)
        strictEqual(actual, true, `Did not return an array on success`)
    })

    it(`Should return 10 items by default`, async () => {
        mockClient.query = (sql, [page, pageSize]) => Promise.resolve(mockUsers.slice(page / pageSize, pageSize))
        output.res = await getAllUsers({ client: mockClient })
            .catch(err => output.err = err || true)
        const actual = output.res.length === 10
        strictEqual(actual, true, `Returned ${output.res.length} items`)
    })

    it(`Should return 5 items max if pageSize is 5`, async () => {
        mockClient.query = (sql, [page, pageSize]) => Promise.resolve(mockUsers.slice(page / pageSize, pageSize))
        output.res = await getAllUsers({ client: mockClient, pageSize: 5 })
            .catch(err => output.err = err || true)
        const actual = output.res.length === 5
        strictEqual(actual, true, `Returned ${output.res.length} items`)
    })

    it(`Should return correct items on page 1 pageSize 1`, async () => {
        mockClient.query = (sql, [page, pageSize]) => Promise.resolve(mockUsers.slice(page / pageSize, pageSize))
        output.res = await getAllUsers({ client: mockClient, page: 1, pageSize: 1 })
            .catch(err => output.err = err || true)
        const actual = output.res[0].id === mockUsers[0].id && output.res[0].name === mockUsers[0].name
        strictEqual(actual, true, `Returned ${output.res.length} items`)
    })

    it(`Should return correct items on page n pageSize n`, async () => {
        mockClient.query = (sql, [page, pageSize]) => Promise.resolve(mockUsers.slice(page / pageSize, pageSize))
        for (let n = 1; n <= mockUsers.length; n++) {
            output.res = await getAllUsers({ client: mockClient, page: n, pageSize: n })
                .catch(err => output.err = err || true)
            const actual = output.res[0].id === mockUsers[n - 1].id && output.res[0].name === mockUsers[n - 1].name
            strictEqual(actual, true, `Returned ${output.res.length} items`)
        }
    })

    it(`Should throw on failure`, async () => {
        mockClient.query = () => Promise.reject(new MockError())
        await getAllUsers({ client: mockClient })
            .catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${feature} did not throw on failure`)
    })
})