module.exports = ({ router = require('express').Router(), asyncHandler = require('../../../../Util').asyncHandler }) => {
    const getAllSamplesHandler = require('./getAllSamplesHandler')

    router.get('', asyncHandler(getAllSamplesHandler))
    return router
}