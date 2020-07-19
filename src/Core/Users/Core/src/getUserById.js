module.exports = async ({ id, getUserById = require('../../Repository').getUserById }) => {
    const [user] = await getUserById({ id })
    return user
}