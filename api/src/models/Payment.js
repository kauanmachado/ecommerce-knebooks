const mongoose = require('mongoose')

const Payment = mongoose.model('Payment', {

    id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    card: {
        type: mongoose.Types.ObjectId,
        ref: 'UserCards',
        required: true
    },

})

module.exports = Payment