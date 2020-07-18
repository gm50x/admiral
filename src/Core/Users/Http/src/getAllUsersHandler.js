module.exports = async (req, res, n, getAllUsers = require('../../Core').getAllUsers) => {
    const page = Number(req.query.page) || undefined
    const pageSize = Number(req.query.pageSize) || undefined
    const users = await getAllUsers({ page, pageSize })
    return res.status(200).json(users)
}