module.exports = async ({ page, pageSize, repository = require('../../Repository') }) => {
    return await repository.getAllUsers({ page, pageSize })
}
