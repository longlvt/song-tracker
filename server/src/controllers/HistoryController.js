const Sequelize = require('sequelize')
// const History = require('../models/History')
const Song = require('../models/Song')
const User = require('../models/User')
const _ = require('lodash')


module.exports = {
  async index (req, res) {
    try {
        const {userId} = req.user.id // req.user comes from isAuthenticated if user is already logged-in
        console.log(`RETRIEVING HISTORY OF USER:`, userId)
        const findWhere = {
            UserId: userId
        }
        // FIX ME: Fetch history after finish associate DB
        // const histories = await History.findAll({
        //   where: {
        //       UserId: userId
        //   }, // find element that match findWhere
        //     include: [ // To include the data of Song into the response 
        //         {
        //             model: Song
        //         }
        //     ]
        // })
        // .map(history => history.toJSON()) // convert element to JSON
        // .map(history => _.extend(
        //     {}, // Create a new object then append data of Song and History into it.
        //     history.Song,
        //     history
        // ))
        // res.send(_.uniqBy(histories, history => history.SongId)) // Return a unique collection where key is history.SongId
        res.send(findWhere)
    }
    catch (err) {
        res.status(500).send({
            error: 'An Error Has Occured while fetching history. Please try again later.'
        })
    }
  },
  async post (req, res) {
    try {
        console.log(`BODY IN POST HISTORY:`, req.body)
        const userId = req.user.id // req.user comes from isAuthenticated if user is already logged-in
        const { songId } = req.body
        // FIX ME: FIX creating bookmark after finish associate DB
        // const newHistory = await History.create({
        //   SongId: songId,
        //   UserId: userId
        // })
        // res.send(newHistory)
        console.log(`TO BE HISTORY BY USER: ${userId}, with the SONG: ${songId}`)
        res.send({songId, userId})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            error: 'An Error Has Occured While adding to History. Please try again later.'
        })
    }
  }
}

