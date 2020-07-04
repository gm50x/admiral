const router = require('express').Router()

const { UsersRouter } = require('../Core/Users')

router.use('/users', UsersRouter)

module.exports = router