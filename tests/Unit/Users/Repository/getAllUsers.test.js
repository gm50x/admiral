const { strictEqual } = require('assert')
const { getAllUsers } = require('../../../../src/Core/Users/Repository')

const testName = 'getAllUsers'

const output = {}
const mockClient = {}

describe(`Users/Repository/${testName}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getAllUsers === 'function'
        strictEqual(actual, true, `${testName} is not a function`)
    })

    it(`Should not throw on success`, async () => {
        mockClient.query = () => Promise.resolve()
        await getAllUsers({ client: mockClient }).catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `${testName} threw on success`)
    })

    it(`Should throw on failure`, async () => {
        mockClient.query = () => Promise.reject()
        await getAllUsers({ client: mockClient }).catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${testName} did not throw on failure`)
    })
})