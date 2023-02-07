const express = require('express')

const authRouter = require('./auth/auth.router')

const api = express.Router()

api.use('/hs/mobile/',authRouter)

module.exports = api