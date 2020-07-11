module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'track-Tracker',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PWD || 'loveanh1',
        // options: {
        //     dialect: process.env.DIALECT || 'sqlite',
        //     host: process.env.HOT || 'localhost',
        //     storage: './trackTracker.sqlite'
        // }
    }
}