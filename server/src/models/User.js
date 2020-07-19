// const db = require('./index')
const Sequelize = require('sequelize')
const sequelize = require('./index')
const Promise = require('bluebird')

const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
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

function hashPassword (user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        console.log(`PWD CHANGED`)
        return
    }

    console.log('hashPasword')
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

const User = sequelize.define('User', {
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING
    }, {
        hooks: {
            // beforeCreate: hashPassword,
            // beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

User.prototype.comparePassword = function (password) {
    console.log(`THIS IS PASSWORD:`, password)
    console.log(`PWD TO COMAPRE:`, this.password)
    return bcrypt.compareAsync(password, this.password)
}
module.exports = User
