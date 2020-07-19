const { strictEqual } = require('assert')

const { mockRequest: req, mockResponse: res, mockNext: next, mockReset } = require('../../../Mocks')

const { getUserByIdHandler } = require('../../../../src/Core/Users/Http')

const scope = 'Users'
const layer = 'Http'
const feature = 'getUserByIdHandler'

const output = {}

describe(`${scope}/${layer}/${feature}`, () => {
    beforeEach(async () => await mockReset(req, res))
    it(`Should be a function`, async () => {
        const actual = typeof getUserByIdHandler === 'function'
        strictEqual(actual, true, `${feature} is not a function`)
    })

    it(`Should return status code 200 on success`, async () => {
        req.params.id = 1
        await getUserByIdHandler(req, res, next, () => Promise.resolve([]))
            .catch(err => output.err = err || true)
        const actual = res.statusCode === 200
        strictEqual(actual, true, `Status code ${res.statusCode} diverged from the expected 200`)
    })

    it(`Should return status code 400 on incorrect parameters`, async () => {
        await getUserByIdHandler(req, res, next, () => Promise.resolve([]))
            .catch(err => output.err = err || true)
        const actual = res.statusCode === 400
        strictEqual(actual, true, `Status code ${res.statusCode} diverged from the expected 400`)
    })

    it(`Should throw on failure`, async () => {
        req.params.id = 1
        await getUserByIdHandler(req, res, next, () => Promise.reject(new MockError()))
            .catch(err => output.err = err)
        const actual = output.err !== undefined
        strictEqual(actual, true, `Did not throw on error`)
    })
})