const res = {
    status: st => {
        res.statusCode = st
        return res
    },
    json: data => data
}

module.exports = res