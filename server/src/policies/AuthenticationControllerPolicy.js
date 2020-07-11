const Joi = require('joi')
// joi is a framework used for validating req.body/query/prams
module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8-32}$') // a to z, A to Z, 0 to 9, length = 8-32
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error:'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error:`The provided password failed to match the requirements:
                            <br>
                            1. MUST contains ONLY alphanumeric characters
                            <br>
                            2. Has at least 8 characters, and not greater than 32 characters`
                    })
                    break
                default:
                    res.status(400).send({
                        error:'Invalid email/password'
                    })
            }
        } else {
            next()
        }
    }
}
