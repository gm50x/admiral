const router = require('express').Router()

const { getSamplesRouter, getUsersRouter } = require('../../Core')

router.use('/users', getUsersRouter({}))
router.use('/samples', getSamplesRouter({}))

module.exports = router