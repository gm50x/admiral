const { start } = require('./src/app')

const port = process.env.PORT || 3000
start({ port })