const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    done: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Songs', SongSchema);