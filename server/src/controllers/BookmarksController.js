const Sequelize = require('sequelize')
// const Bookmark = require('../models/Bookmark')


module.exports = {
  async index (req, res) {
    try {
        const {songId} = req.query
        // FIX ME: FIX fetching bookmark after finish associate DB
        // const bookmark = await Bookmark.findOne({
        //   where: {
        //     SongId: songId,
        //     UserId: userId
        //   }
        // })
        // res.send(bookmark)
        res.send(songId)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured while fetching bookmark. Please try again later.'
        })
    }
  },
  async post (req, res) {
    try {
        const bookmark = req.body
        // FIX ME: FIX creating bookmark after finish associate DB
        // await Bookmark.create(bookmark)
        res.send(bookmark)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured While bookmarking. Please try again later.'
        })
    }
  },
  async delete (req, res) {
    try {
        const {bookmarkId} = req.params
        // FIX ME: FIX deleting bookmark after finish associate DB
        // const bookmark = await Bookmark.findByPk(bookmarkId)
        // await bookmark.destroy()
        // res.send(bookmark)
        res.send(bookmarkId)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured while deleting bookmark. Please try again later.'
        })
    }
  }
}

