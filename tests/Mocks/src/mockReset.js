module.exports = (req, res) => {
    req.headers = {}
    req.params = {}
    req.query = {}
    req.body = {}
    res.statusCode = undefined
    return Promise.resolve()
}