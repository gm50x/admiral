module.exports = async ({
    client = require('../../../../Util').getPostgresClient({}),
    id
}) => await client
    .query('SELECT * FROM ADMIRAL.USERS WHERE ID = $1', [id])