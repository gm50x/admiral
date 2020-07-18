module.exports = async (req, res, n, getAllSamples = require('../../Core').getAllSamples) => {
    const samples = await getAllSamples({})
    return res.status(200).json(samples)
}