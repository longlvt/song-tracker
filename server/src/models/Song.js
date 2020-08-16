// const db = require('./index')
const Sequelize = require('sequelize')
const sequelize = require('./index')

const Song = sequelize.define('Song', {
    title: Sequelize.STRING,
    artist: Sequelize.STRING,
    genre: Sequelize.STRING,
    album: Sequelize.STRING,
    albumImage: Sequelize.STRING,
    youtubeId: Sequelize.STRING,
    lyrics: Sequelize.TEXT,
    tab: Sequelize.TEXT,
    })


module.exports = Song
