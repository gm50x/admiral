module.exports = {
    getAllUsers: async ({ client }) => await client
        .query('SELECT * FROM STORE.USERS'),
    addUser: async ({ client, user }) => await client
        .query('INSERT INTO STORE.USERS (NAME, BIRTHDATE) VALUES ($1, $2)', [user.name, user.birthdate]),
}