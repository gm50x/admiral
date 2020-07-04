module.exports = {
    getPostgresClient: ({ Client = require('pg').Client, database = 'postgres', user = 'postgres', password = 'postgres@2020', host = 'localhost' }) => ({
        query: async (sql, parameters) => {
            const client = new Client({ database, user, password, host })
            await client.connect()
            const result = await client.query(sql, parameters)
            client.end()
            return result.rows
        }
    })
}