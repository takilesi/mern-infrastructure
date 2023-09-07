const SongNotes = require('../../models/SongNotes');
// controllers 
module.exports = {
    createSongNote,
    readSongNote,
    updateSongNote,
    deleteSongNote
};

// create all songs
async function createSongNote(req, res) {
  try{
    const songNote = await SongNotes.create(req.body)
    res.json(songNote)
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// read all songs 
async function readSongNote(req, res) {
    try{
      const song = await SongNotes.find({})
      res.json(song)
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }

  // update all songs 
async function updateSongNote(req, res) {
    try{
      const song = await SongNotes.findByIdAndUpdate(req.body)
      res.json(song)
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }

  // delete all songs 
async function deleteSongNote(req, res) {
    try{
      const song = await SongNotes.findByIdAndDelete(_id)
      res.status(200).json({ msg: "song deleted" })
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }


