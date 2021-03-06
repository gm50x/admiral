const { strictEqual } = require('assert')

const { getUserById } = require('../../../../src/Core/Users')

const scope = 'Users'
const layer = 'Core'
const feature = 'getUserById'

const output = {}

describe(`${scope}/${layer}/${feature}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getUserById === 'function'
        strictEqual(actual, true, `${feature} is not a function`)
    })

    it(`Should not throw on success`, async () => {
        await getUserById({ getUserById: () => Promise.resolve([]) })
            .catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `${feature} threw on success`)
    })

    it(`Should return an object on success`, async () => {
        output.res = await getUserById({ getUserById: () => Promise.reject(new MockError()) })
            .catch(err => output.err = err || true)
        const actual = typeof output.res === 'object'
        strictEqual(actual, true, `${feature} did not throw on failure`)
    })

    it(`Should throw on failure`, async () => {
        await getUserById({ getUserById: () => Promise.reject(new MockError()) })
            .catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${feature} did not throw on failure`)
    })

})