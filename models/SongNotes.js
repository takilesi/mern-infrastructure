const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songNotesSchema = new Schema({
    songName: {
        type: String,
        required: true
    },
    songNameId: String, 
    songNote: String, 
    done: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('SongNotes', songNotesSchema);


