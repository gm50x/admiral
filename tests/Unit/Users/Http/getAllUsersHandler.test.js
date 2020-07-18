const { strictEqual } = require('assert')

const { mockRequest: req, mockResponse: res, mockNext } = require('../../../Mocks')

const { getAllUsersHandler } = require('../../../../src/Core/Users/Http')

const testName = 'getAllUsersHandler'

const output = {}

describe(`Users/Http/${testName}`, () => {
    it(`Should be a function`, async () => {
        const actual = typeof getAllUsersHandler === 'function'
        strictEqual(actual, true, `${testName} is not a function`)
    })

    it(`Should not throw on success`, async () => {
        const mock = () => Promise.resolve()
        await getAllUsersHandler(req, res, mockNext, mock)
            .catch(err => output.err = err || true)
        const actual = output.err === undefined
        strictEqual(actual, true, `${testName} threw on success`)
    })

    it(`Should throw on failure`, async () => {
        const mock = () => Promise.reject()
        await getAllUsersHandler(req, res, mockNext, mock)
            .catch(err => output.err = err || true)
        const actual = output.err !== undefined
        strictEqual(actual, true, `${testName} did not throw on failure`)
    })
})