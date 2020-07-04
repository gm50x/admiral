const { getAllUsers } = require('../Core')

module.exports = async (req, res) => {
    const users = await getAllUsers({})
    return res.status(200).json(users)
}