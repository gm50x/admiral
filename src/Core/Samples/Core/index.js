module.exports = {
    getAllSamples: async ({ repository = require('../Infrastructure/samplesRepository') }) => {
        return await repository.getAll()
    }
}