const Albums = require('../models/albums');
const songs = require('../models/songs');

module.exports = {
  allAlbums: () => {
    return Albums.findAll({
      order: [['sale_dt', 'ASC']]
    })
  },
  findbyName: name => {
    return Albums.findAll({
      where: {
        name: {
          $like: "%" + name + "%"
        }
      }
    })
  },
  findbyNameWithSongs: name => {
    return Albums.findAll({
      where: {
        name: {
          $like: "%" + name + "%"
        }
      },
      include: [
        {
          model: songs,
          required: false
        }
      ]
    })
  }
}