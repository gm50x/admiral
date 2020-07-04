module.exports = async ({ name, birthdate, repository = require('../Infrastructure/usersRepository') }) => {
    return await repository.addUser({ user: { name, birthdate } })
}