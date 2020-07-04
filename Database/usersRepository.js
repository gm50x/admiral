module.exports = {
    getAllUsers: async ({ client }) => await client
        .query('SELECT * FROM STORE.USERS')
}