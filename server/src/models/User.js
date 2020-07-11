// const db = require('./index')
const Sequelize = require('sequelize')
const sequelize = require('./index')
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     email: {
//         type: DataTypes.STRING,
//         unique: true
//     },
//     password: DataTypes.STRING
//   })
//   return User
// }

const User = sequelize.define('User', {
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING
    })

module.exports = User
