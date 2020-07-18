module.exports = async ({ id, repository = require('../../Repository') }) => {
    return await repository.getUserById({ id })
}