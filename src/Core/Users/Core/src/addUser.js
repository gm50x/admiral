module.exports = async ({ name, birthdate, repository = require('../../Repository') }) => {
    return await repository.addUser({ user: { name, birthdate } })
}