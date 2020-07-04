module.exports = async ({ id, repository = require('../Infrastructure/usersRepository') }) => {
    return await repository.getUserById({ id })
}