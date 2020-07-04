const router = require('express').Router()

const getAllUsersHandler = require('./getAllUsersHandler')
const getUserByIdHandler = require('./getUserById')
const addUserHandler = require('./addUserHandler')

router.get('', getAllUsersHandler)
router.get('/:id', getUserByIdHandler)
router.post('', addUserHandler)

module.exports = router