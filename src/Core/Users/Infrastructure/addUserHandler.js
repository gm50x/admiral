const { addUser } = require('../Core')

module.exports = async (req, res) => {
    const { name, birthdate } = req.body

    if (!name || !birthdate) {
        return res.status(400).json({ message: 'Cannot create a new user without name or birthdate' })
    }
    const [result] = await addUser({ name, birthdate })
    res.header('X-Location', `/users/${result.id}`)
    return res.status(201).json()
}