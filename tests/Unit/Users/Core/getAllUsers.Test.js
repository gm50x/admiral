const { strictEqual } = require('assert')

const { getAllUsers } = require('../../../../src/Core/Users')

const scope = 'Users'
const layer = 'Core'
const feature = 'getAllUsers'

const output = {}

describe(`${scope}/${layer}/${feature}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getAllUsers === 'function'
        strictEqual(actual, true, `${feature} is not a function`)
    })

    it(`Should not throw on success`, async () => {

        await getAllUsers({ getAllUsers: () => Promise.resolve() }).catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `${feature} threw on success`)
    })

    it(`Should throw on failure`, async () => {
        await getAllUsers({ getAllUsers: () => Promise.reject(new MockError()) })
            .catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${feature} did not throw on failure`)
    })
})