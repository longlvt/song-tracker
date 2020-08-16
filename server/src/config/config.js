
// const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'track-Tracker',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PWD || 'loveanh1',
        // options: {
        //     dialect: process.env.DIALECT || 'sqlite',
        //     host: process.env.HOT || 'localhost',
            // storage: path.resolve(__dirname, '../../trackTracker.sqlite')
        // }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret123'
    }
}