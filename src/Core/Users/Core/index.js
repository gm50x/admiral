module.exports = {
    addUser: async ({ name, birthdate, repository = require('../Repository/usersRepository') }) => {
        return await repository.addUser({ user: { name, birthdate } })
    },
    getAllUsers: async ({ page, pageSize, repository = require('../Repository/usersRepository') }) => {
        return await repository.getAllUsers({ page, pageSize })
    },
    getUserById: async ({ id, repository = require('../Repository/usersRepository') }) => {
        return await repository.getUserById({ id })
    }
}