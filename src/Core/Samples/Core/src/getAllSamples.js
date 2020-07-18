module.exports = async ({ repository = require('../../Repository') }) => {
    return await repository.getAllSamples()
}