module.exports = ({
    Client = require('pg').Client,
    database = 'postgres',
    user = process.env.DB_USER,
    password = process.env.DB_PASS,
    host = process.env.DB_HOST }) => ({
        query: async (sql, parameters) => {
            const client = new Client({ database, user, password, host })
            await client.connect()
            const result = await client.query(sql, parameters)
            client.end()
            return result.rows
        }
    })