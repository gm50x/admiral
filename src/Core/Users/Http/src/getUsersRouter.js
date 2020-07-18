module.exports = ({ router = require('express').Router(), asyncHandler = require('../../../../Util').asyncHandler }) => {
    const getAllUsersHandler = require('./getAllUsersHandler')
    const getUserByIdHandler = require('./getUserByIdHandler')
    const addUserHandler = require('./addUserHandler')

    router.get('', asyncHandler(getAllUsersHandler))
    router.get('/:id', asyncHandler(getUserByIdHandler))
    router.post('', asyncHandler(addUserHandler))

    return router
}