const Song = require('../models/Songs')


module.exports = {
  async index (req, res) {
    try {
        const songs = await Song.findAll({
            limit: 10
        })
        res.send(songs)
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
  }
}

