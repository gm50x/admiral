module.exports = class MockError extends Error {
    constructor(message) {
        super(message || 'Mock Error')
    }
}