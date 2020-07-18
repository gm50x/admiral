const { strictEqual } = require('assert')

const { getAllUsers } = require('../../../../src/Core/Users')

const testName = 'getAllUsers'

const output = {}
const repository = {}

describe(`Users/Core/${testName}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getAllUsers === 'function'
        strictEqual(actual, true, `${testName} is not a function`)
    })

    it(`Should not throw on success`, async () => {
        repository.getAllUsers = () => Promise.resolve()
        await getAllUsers({ repository }).catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `${testName} threw on success`)
    })

    it(`Should throw on failure`, async () => {
        repository.getAllUsers = () => Promise.reject()
        await getAllUsers({ repository }).catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${testName} did not throw on failure`)
    })
})