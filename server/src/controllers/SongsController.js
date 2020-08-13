const Song = require('../models/Songs')
const Sequelize = require('sequelize')


module.exports = {
  async index (req, res) {
    try {
        let songs = null
        const search = req.query.search
        const Op = Sequelize.Op;
        if (search) {
            songs = await Song.findAll({
                where: {
                    [Op.or]: [
                    // THIS CODE IS FOR Sequelize < 4.12
                    // $or: [
                    //     'title', 'artist', 'genre', 'album'
                    // ].map(key => ({
                    //     [key]: {
                    //         $like: `%${search}%`
                    //     }
                    // }))

                    // THIS CODE IS FOR Sequelize >= 4.12
                        { title: { [Op.like]: '%' + search + '%' } },
                        { artist: { [Op.like]: '%' + search + '%' } },
                        { genre: { [Op.like]: '%' + search + '%' } },
                        { album: { [Op.like]: '%' + search + '%' } }
                    ]
                }
            })
        } else {
            songs = await Song.findAll({
                limit: 10
            })
        }
        // console.log(`THIS IS SONG MATCHED:`, songs)
        res.send(songs)
    }
    catch (err) {
        console.log(`ERROR INDEX SONGS:`, err)
        res.status(500).send({
            error: 'An Error Has Occured. Please try again later.'
        })
    }
  },
  async show (req, res) {
    try {
        const song = await Song.findByPk(req.params.songId)
        res.send(song)
    }
    catch (err) {
        console.log(`ERROR INDEX SONGS:`, err)
        res.status(500).send({
            error: 'An Error Has Occured. Please try again later.'
        })
    }
  },
  async post (req, res) {
    try {
        const songs = await Song.create(req.body)
        res.send(songs)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured. Please try again later.'
        })
    }
  },
  async put (req, res) {
    try {
        const songs = await Song.update(req.body, {
            where: {
                id: req.params.songId
            }
        })
        res.send(songs)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured while trying to update the song. Please try again later.'
        })
    }
  }
}

