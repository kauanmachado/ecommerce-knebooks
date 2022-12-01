const mongoose = require('mongoose')

const Book = mongoose.model('Book', {

    id: {
        type:  mongoose.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = Book