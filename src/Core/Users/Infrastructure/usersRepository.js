const { getPostgresClient } = require("../../../Database/postgresClient");

module.exports = {
    getAllUsers: async ({ client = getPostgresClient({}) }) => await client
        .query('SELECT * FROM STORE.USERS'),
    getUserById: async ({ client = getPostgresClient({}), id }) => await client
        .query('SELECT * FROM STORE.USERS WHERE ID = $1', [id]),
    addUser: async ({ client = getPostgresClient({}), user }) => await client
        .query('INSERT INTO STORE.USERS (NAME, BIRTHDATE) VALUES ($1, $2) RETURNING ID', [user.name, user.birthdate]),

}