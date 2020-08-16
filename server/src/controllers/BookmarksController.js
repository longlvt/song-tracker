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
        console.log(req.body)
        const { songId, userId } = req.body.params
        // FIX ME: FIX creating bookmark after finish associate DB
        // const bookmark = await Bookmark.findOne({
        //   where: {
        //     SongId: songId,
        //     UserId: userId
        //   }
        // })
        // if (bookmark) {
        //   return res.status(400).send({
        //     error: 'Already have this in your bookmark'
        //   })
        // }
        // const newBookmark = await Bookmark.create({
        //   SongId: songId,
        //   UserId: userId
        // })
        // res.send(newBookmark)
        console.log(`TO BE BOOKMARKED BY USER: ${userId}, with the SONG: ${songId}`)
        res.send({songId, userId})
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured While bookmarking. Please try again later.'
        })
    }
  },
  async delete (req, res) {
    try {
        console.log(req.params)
        const { bookmarkId } = req.params
        // FIX ME: FIX deleting bookmark after finish associate DB
        // const bookmark = await Bookmark.findByPk(bookmarkId)
        // await bookmark.destroy()
        // res.send(bookmark)
        console.log(`BOOKMARK TO DELETE: ${bookmarkId}`)
        res.send(bookmarkId)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured while deleting bookmark. Please try again later.'
        })
    }
  }
}

