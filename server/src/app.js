const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const sequelize = require('./models')
const config = require('./config/config')
// const Song = require('./models/Song')
// const User = require('./models/User')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// Song.belongsTo(User)
sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.info(`🚀 Express running at port ${config.port} ...`)
    })

