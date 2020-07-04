const { getUserById } = require('../Core')

module.exports = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'Missing required parameter id' })
    }

    const [user] = await getUserById({ id })
    return res.status(200).json(user)
}