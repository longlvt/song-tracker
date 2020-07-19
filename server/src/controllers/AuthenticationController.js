const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async register(req, res) {
    try {
        User.create(req.body)
        .then(user => {
            // res.send('USER CREATED')
            const userJson = user.toJSON()
            res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({
              error: 'This account is already in use.'
          })
        });
    }
    catch (err) {
        // console.log(err)
        res.status(400).send({
            error: 'Please try again later.'
        })
    }
  },

  async login(req, res) {
    try {
        const {email, password} = req.body
        console.log(`CHECK INFO:`, email, password)
        User.findOne({
          where: {
            email: email
          }
        })
        .then(async (user) => {
            // console.log(`USER FOUND:`, users)
            if (!user) {
                console.log(`USER NOT EXISTED`)
                return res.status(403).send({
                  error: 'Email/Password invalid'
                })
              }
            const isPasswordValid = await user.comparePassword(password)
            // console.log(password, users[0].password)
            if (!isPasswordValid) {
              console.log(`WRONG LOGIN PWD`)
              return res.status(403).send({
                error: 'Email/Password invalid'
              })
            }

            // EMAIL AND PWD MATCHED
            const userJson = user.toJSON()
            res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
              error: 'Invalid Login Information.'
          })
        });
        // res.send(newUser.toJSON())
    }
    catch (err) {
        // console.log(err)
        res.status(400).send({
            error: 'Please try again later.'
        })
    }
  }
}

