module.exports = async ({
    client = require('../../../../Util').getPostgresClient({}),
    page = 1,
    pageSize = 10
}) => await client
    .query('SELECT * FROM STORE.USERS OFFSET $1 LIMIT $2', [(page - 1) * pageSize, pageSize])
