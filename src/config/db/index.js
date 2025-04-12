const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/F8_education', {
            autoIndex: false
        })
        console.log('Connect successfully!')
    } catch (error) {
        console.error('Connect failure!')
    }
}

module.exports = { connect }