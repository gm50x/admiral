const { getAllUsers } = require('../Core')

module.exports = async (req, res) => {
    const { page, pageSize } = req.query

    const users = await getAllUsers({ page: page ? Number(page) : page, pageSize: pageSize ? Number(pageSize) : pageSize })
    return res.status(200).json(users)
}