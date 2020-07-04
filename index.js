const { getPostgresClient } = require('./Database/postgresClient')
const { getAllUsers } = require('./Database/usersRepository')

async function main() {
    try {
        const users = await getAllUsers({ client: getPostgresClient({}) })
        console.log(users)
    } catch (err) {
        console.log(err.message)
    }
}

main()


