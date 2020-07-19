module.exports = async ({ page, pageSize, getAllUsers = require('../../Repository').getAllUsers }) => {
    return await getAllUsers({ page, pageSize })
}
