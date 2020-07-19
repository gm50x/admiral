module.exports = ({
    Client = require('pg').Client,
    database = 'postgres',
    user = process.env.DB_USER || 'postgres',
    password = process.env.DB_PASS || 'Postgres@2020',
    host = process.env.DB_HOST || 'localhost'
}) => ({
    query: async (sql, parameters) => {
        console.log(database, user, password, host)
        const client = new Client({ database, user, password, host })
        await client.connect()
        const result = await client.query(sql, parameters)
        client.end()
        return result.rows
    }
})