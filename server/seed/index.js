
const sequelize = require('../src/models/index')
const Song = require('../src/models/Song')
const User = require('../src/models/User')
const Bookmark = require('../src/models/User')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({force: true})
    .then(async function () {
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )

        await Promise.all(
            songs.map(user => {
                Song.create(user)
            })
        )
        await Promise.all(
            bookmarks.map(user => {
                Bookmark.create(user)
            })
        )
    })