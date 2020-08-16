
const Sequelize = require('sequelize')
const sequelize = require('./index')

const Bookmark = sequelize.define('Bookmark', {
    associate: (models) => {
        Bookmark.belongsTo(models.User)
        Bookmark.belongsTo(models.Song)
    }
})

module.exports = Bookmark
