module.exports = async ({
    client = require('../../../../Util').getPostgresClient({}),
    id
}) => await client
    .query('SELECT * FROM STORE.USERS WHERE ID = $1', [id])