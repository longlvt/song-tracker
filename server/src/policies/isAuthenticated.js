// Use this Policy in front of our routes.
// Call passport.authenticate with the JWT strategy (the one of JwtStrategy used in passport.js)
const passport = require('passport')


module.exports = function (req, res, next) {
    passport.authenticate('jwt', function (err, user) { // The user argument will be return from passport.js
        if (err) res.status(403).send({
            error: 'You can not access this resource'
        })
        else {
            req.user = user
            next()
        }
    })(req, res, next)
}