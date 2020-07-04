const router = require('express').Router()

const { asyncHandler } = require('../../../Lib')

const getAllSamplesHandler = require('./getAllSamplesHandler')

router.get('', asyncHandler(getAllSamplesHandler))

module.exports = router

