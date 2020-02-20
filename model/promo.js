const mongoose = require('mongoose');
const promo = new mongoose.Schema({
    name: {
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('promo', promo);