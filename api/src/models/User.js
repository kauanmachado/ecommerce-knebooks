const mongoose = require('mongoose')

const User = mongoose.model('User', {
    
    id: {
        type: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },

    password: {
        type: String,
        required: true
    },

    books: {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
    },
    
    cards: {
        type: mongoose.Types.ObjectId,
        ref: 'UserCards',
        
    }

})

module.exports = User