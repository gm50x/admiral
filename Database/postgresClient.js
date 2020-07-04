module.exports = {
    getPostgresClient: ({ Client = require('pg').Client, database = 'postgres', user = 'postgres', password = 'postgres@2020', host = 'localhost' }) => ({
        query: async (sql, parameters) => {
            const client = new Client({ database, user, password, host })
            await client.connect()
            return new Promise(async (resolve, reject) => {
                client.query(sql, parameters, (err, res) => {
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