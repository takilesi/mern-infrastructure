const express = require('express');
const router = express.Router();
const songnotesCtrl = require('../../controllers/api/songnotes')

// POST /api/song
router.post('/createsongnote', songnotesCtrl.createSongNote)

// GET /api/song
router.get('/readsongnotes', songnotesCtrl.readSongNote)

// PUT /api/song
router.put('/', songnotesCtrl.updateSongNote)

// DELETE /api/song
router.delete('/', songnotesCtrl.deleteSongNote)



module.exports = router;