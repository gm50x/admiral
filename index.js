const { getPostgresClient } = require('./Database/postgresClient')
const { getAllUsers, addUser } = require('./Database/usersRepository')

async function main() {
    try {
        const client = getPostgresClient({})
        const user = { name: 'Jane Doe', birthdate: new Date(1945, 8, 2) }
        await addUser({ client, user })
        const users = await getAllUsers({ client })
        console.log(users)
    } catch (err) {
        console.log(err.message)
    }
}

main()


