const router = require('express').Router()

const { asyncHandler } = require('../../../Lib')

const getAllUsersHandler = require('./getAllUsersHandler')
const getUserByIdHandler = require('./getUserById')
const addUserHandler = require('./addUserHandler')

router.get('', asyncHandler(getAllUsersHandler))
router.get('/:id', asyncHandler(getUserByIdHandler))
router.post('', asyncHandler(addUserHandler))

module.exports = router

