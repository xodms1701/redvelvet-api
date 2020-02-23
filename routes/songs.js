const express = require('express');
const router = express.Router();
const songsService = require('../services/songsService');

// 모두
router.get('/all', function(req, res, next) {
  songsService.allSongs()
    .then(songs => {
      res.json(songs);
    })
});

module.exports = router;
