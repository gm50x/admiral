module.exports = {
    getAllSamples: async ({ repository = require('../Repository/samplesRepository') }) => {
        return await repository.getAll()
    }
}