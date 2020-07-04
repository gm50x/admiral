const router = require('express').Router()

const { UsersRouter } = require('../Core/Users')
const { SamplesRouter } = require('../Core/Samples')

router.use('/users', UsersRouter)
router.use('/samples', SamplesRouter)

module.exports = router