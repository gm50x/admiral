module.exports = async ({ name, birthdate, addUser = require('../../Repository').addUser }) => {
    return await addUser({ user: { name, birthdate } })
}