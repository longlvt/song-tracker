// const fs = require('fs')
// const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
      dialect: 'mysql',
      host: 'localhost'
    }
)

// fs
//   .readdirSync(__dirname)
//   .filter((file) => {file !== 'index.js'})
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file))
//     db[model.name] = model
//   })
// db.sequelize = sequelize
// db.Sequelize = Sequelize
// module.exports = db
// const db = {}
// const User = require("./User.js")
// const Song = require("./Song.js")
// const Bookmark = require("./Bookmark.js")

// const db = {
//   User,
//   Song,
//   Bookmark
// }

// FIX ME: Associate DB
// Object.keys(db).forEach(function (modelName) {
//   if ('associate' in (db)[modelName]) {
//     (db)[modelName].associate(db)
//   }
// })

module.exports = sequelize

