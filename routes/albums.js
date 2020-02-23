const express = require('express');
const router = express.Router();
const albumsService = require('../services/albumsService');

// 모두
router.get('/all', (req, res, next) => {
  albumsService.allAlbums()
    .then(albums => {
      res.json(albums);
    })
});

// 앨범명으로 검색
router.post('/name', (req, res, next) => {
  albumsService.findbyName(req.body.album_name)
    .then(albums => {
      res.json(albums);
    })
});

// 앨범명으로 검색, 노래 포함
router.post('/nameWithSongs', (req, res, next) => {
  albumsService.findbyNameWithSongs(req.body.album_name)
    .then(albums => {
      res.json(albums);
    })
});

module.exports = router;
