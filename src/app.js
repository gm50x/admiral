const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const { errorHandler } = require('./Lib')
const router = require('./Router')

module.exports = {
    start: ({ port = 3000 }) => {
        const app = express()
        app.use(morgan('dev'))
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use('/api/v1', router)

        app.use(errorHandler)
        app.listen(port, () => console.log(`Listening on localhost:${port}`))
    }
}