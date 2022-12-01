var express = require('express')
const Book = require('./src/models/Book')
var route = express.Router()
const BookController = require('./src/controllers/BookController')
const UserController = require('./src/controllers/UserController')


route.post('/auth/registro', UserController.registrar)
route.post('/auth/login', UserController.login)

module.exports = route