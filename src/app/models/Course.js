const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema

const Course = new Schema({
    name: { type: String, required: true, default: '', maxLength: 255, },
    description: { type: String },
    image: { type: String },
    videoID: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
})

// Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true, validateBeforeDelete: false })

module.exports = mongoose.model('Course', Course)
