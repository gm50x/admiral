module.exports = async ({
    client = require('../../../../Util').getPostgresClient({}),
    user
}) => await client
    .query('INSERT INTO STORE.USERS (NAME, BIRTHDATE) VALUES ($1, $2) RETURNING ID', [user.name, user.birthdate])