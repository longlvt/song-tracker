const Sequelize = require('sequelize')
// const Bookmark = require('../models/Bookmark')
const Song = require('../models/Song')
const User = require('../models/User')
const _ = require('lodash')


module.exports = {
  async index (req, res) {
    try {
        const userId = req.user.id // req.user comes from isAuthenticated if user is already logged-in
        const {songId} = req.query
        const findWhere = {
            UserId: userId
        }
        if (songId) findWhere.SongId = songId
        // FIX ME: FIX fetching bookmark after finish associate DB
        // const bookmarks = await Bookmark.findAll({
        //   where: findWhere, // find element that match findWhere
        //     include: [ // To include the data of Song into the response 
        //         {
        //             model: Song
        //         }
        //     ]
        // })
        // .map(bookmark => bookmark.toJSON()) // convert element to JSON
        // .map(bookmark => _.extend(
        //     {}, // Create a new object then append data of Song and bookmark into it.
        //     bookmark.Song,
        //     bookmark
        // ))
        // res.send(bookmarks)
        res.send(findWhere)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured while fetching bookmark. Please try again later.'
        })
    }
  },
  async post (req, res) {
    try {
        console.log(`BODY IN POST BOOKMARK:`, req.body)
        const userId = req.user.id // req.user comes from isAuthenticated if user is already logged-in
        const { songId } = req.body
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
        const userId = req.user.id // req.user comes from isAuthenticated if user is already logged-in
        const { bookmarkId } = req.params
        // FIX ME: FIX deleting bookmark after finish associate DB
        // const bookmark = await Bookmark.findOne({
        //     where: {
        //         id: bookmarkId,
        //         UserId: userId
        //     }
        // })
        // if (!bookmark) res.status(403).send({
        //     error: 'You do not have permission to delete this bookmark'
        // })
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

