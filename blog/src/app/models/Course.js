const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: {
        type: String,
        required: true,
        default: '',
        maxLength: 255,
    },
    description: {
        type: String, required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now
    },
    updatedDate: {
        type: Date, default: Date.now
    }
})

module.exports = mongoose.model('Course', Course)
