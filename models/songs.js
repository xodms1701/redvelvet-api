const connector = require('../dbConnector');
const Sequelize = require('sequelize');

const Songs = connector.define('Songs', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	album_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	title_yn: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	name: {
		type: Sequelize.STRING(64),
		allowNull: true
	},
	genre: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	lyricist: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	composer: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	arrangement: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	lyrics: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	music_video_url: {
		type: Sequelize.STRING(256),
		allowNull: true
	},
	music_video_teaser_url: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	performance_url: {
		type: Sequelize.STRING(256),
		allowNull: true
	}
}, {
	freezeTableName: true,
	underscored: true,
	timestamps: false
});

module.exports = Songs;