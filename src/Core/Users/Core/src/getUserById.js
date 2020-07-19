module.exports = async ({ id, getUserById = require('../../Repository').getUserById }) => {
    return await getUserById({ id })
}