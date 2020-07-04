module.exports = {
    getPostgresClient: ({ Client = require('pg').Client, database = 'postgres', user = 'postgres', password = 'postgres@2020', host = 'localhost' }) => ({
        query: async (sql) => {
            const client = new Client({ database, user, password, host })
            await client.connect()
            return new Promise(async (resolve, reject) => {
                client.query(sql, (err, res) => {
                    client.end()
                    if (!err)
                        resolve(res.rows)
                    else
                        reject(new Error(err.message))
                })
            })
        }
    })
}