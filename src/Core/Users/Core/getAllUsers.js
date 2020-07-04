module.exports = async ({ repository = require('../Infrastructure/usersRepository') }) => {
    return await repository.getAllUsers({})
}