const { getAllSamples } = require('../Core')

module.exports = async (req, res) => {
    const samples = await getAllSamples({})
    return res.status(200).json(samples)
}