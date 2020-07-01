console.log('HELLO')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello there!'
    })
})
const port = process.env.PORT || 8081
app.listen(port, () => {
    console.info(`🚀 Express running at port http://localhost:${port} ...`);
})
