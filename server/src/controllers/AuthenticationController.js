const User = require('../models/User')

module.exports = {
  async register(req, res) {
    try {
        // console.log(typeof(User))
        console.log(User, typeof(User))
        console.log(req.body)
        User.create(req.body)
        .then(() => {
            res.send('USER CREATED')
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({
              error: 'This account is already in use.'
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

