const express = require('express');
const router = express.Router();
const songCtrl = require('../../controllers/api/song')

// POST /api/song
router.post('/createsong', songCtrl.createSong)

// GET /api/song
router.get('/', songCtrl.readSong)

// PUT /api/song
router.put('/', songCtrl.updateSong)

// DELETE /api/song
router.delete('/', songCtrl.deleteSong)



module.exports = router;