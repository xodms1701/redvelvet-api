const Songs = require('../models/songs');

module.exports = {
  allSongs: () => {
    return Songs.findAll({})
  }
}