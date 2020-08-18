
const Sequelize = require('sequelize')
const sequelize = require('./index')

const History = sequelize.define('History', {
    associate: (models) => {
        History.belongsTo(models.User)
        History.belongsTo(models.Song)
    }
})

module.exports = History
