const { strictEqual } = require('assert')

const { mockUsers } = require('../../../Mocks')

const { getUserById } = require('../../../../src/Core/Users/Repository')

const scope = 'Users'
const layer = 'Repository'
const feature = 'getUserById'

const output = {}
const mockClient = {}

describe(`${scope}/${layer}/${feature}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getUserById === 'function'
        strictEqual(actual, true, `${feature} is not a function`)
    })

    it(`Should not throw on success`, async () => {
        mockClient.query = () => Promise.resolve()
        await getUserById({ client: mockClient })
            .catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `Threw on success`)
    })

    it(`Should return an array on success`, async () => {
        mockClient.query = () => Promise.resolve([])
        output.res = await getUserById({ client: mockClient })
            .catch(err => output.err = err || true)
        const actual = Array.isArray(output.res)
        strictEqual(actual, true, `Did not return an array on success`)
    })

    it(`Should return only 1 item if found`, async () => {
        mockClient.query = (sql, [id]) => Promise.resolve(mockUsers.filter(p => p.id === id))
        output.res = await getUserById({ client: mockClient, id: 1 })
            .catch(err => output.err = err || true)
        const actual = output.res.length === 1
        strictEqual(actual, true, `Returned ${output.res.length} items`)
    })

    it(`Should return an empty array if nothing is found`, async () => {
        mockClient.query = (sql, [id]) => Promise.resolve(mockUsers.filter(p => p.id === id))
        output.res = await getUserById({ client: mockClient, id: 0 })
            .catch(err => output.err = err || true)
        const actual = output.res.length === 0
        strictEqual(actual, true, `Returned ${output.res.length} items`)
    })

    it(`Should throw on failure`, async () => {
        mockClient.query = () => Promise.reject(new MockError())
        await getUserById({ client: mockClient })
            .catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${feature} did not throw on failure`)
    })
})