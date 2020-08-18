const passport = require('passport')
const User = require('./models/User')

const config = require('./config/config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Decode and verify that the token (in the Bearer) that comes in on the AuthHeader is valid
        secretOrKey: config.authentication.jwtSecret
    }, async function (jwtPayload, done) {
        try {
            const user = await User.findOne({
                where: {
                    id: jwtPayload.id
                }
            })
            if (!user) return done(new Error(), false)
            return done(null, user)
        } catch (err) {
            return done(new Error(), false)
        }
    })
)

module.exports = null
