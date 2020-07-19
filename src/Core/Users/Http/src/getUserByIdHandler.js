module.exports = async (req, res, n, getUserById = require('../../Core').getUserById) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ message: 'Missing required parameter id' })
    }

    const user = await getUserById({ id })
    return res.status(200).json(user)
}