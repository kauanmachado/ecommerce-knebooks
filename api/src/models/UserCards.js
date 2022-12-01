const mongoose = require('mongoose')


const UserCards = mongoose.model('UserCards', {

    card_number: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    cvv: {
        type: Number,
        required: true
    }

    
})

module.exports = UserCards