const Song = require('../../models/Song');

// create all songs
async function createSong(req, res) {
  try{
    console.log(req.body)
    const song = await Song.create(req.body)
    res.json(song)
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// read all songs 
async function readSong(req, res) {
    try{
      const song = await Song.find({})
      res.json(song)
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }

  // update all songs 
async function updateSong(req, res) {
    try{
      const song = await Song.findByIdAndUpdate(req.body)
      res.json(song)
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }

  // delete all songs 
async function deleteSong(req, res) {
    try{
      const song = await Song.findByIdAndDelete(req.body.id)
      res.status(200).json({ msg: "item deleted"})
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }

module.exports = {
    createSong,
    readSong,
    updateSong,
    deleteSong
};


