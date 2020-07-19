const { strictEqual } = require('assert')

const { mockRequest: req, mockResponse: res, mockNext: next, MockError } = require('../../../Mocks')

const { getAllUsersHandler } = require('../../../../src/Core/Users/Http')

const scope = 'Users'
const layer = 'Http'
const feature = 'getAllUsersHandler'

const output = {}

describe(`${scope}/${layer}/${feature}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getAllUsersHandler === 'function'
        strictEqual(actual, true, `${feature} is not a function`)
    })

    it(`Should not throw on success`, async () => {
        await getAllUsersHandler(req, res, next, () => Promise.resolve())
            .catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `${feature} threw on success`)
    })

    it(`Should throw on failure`, async () => {
        await getAllUsersHandler(req, res, next, () => Promise.reject(new MockError()))
            .catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${feature} did not throw on failure`)
    })
})