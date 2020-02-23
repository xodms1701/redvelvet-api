const connector = require('../dbConnector');
const Sequelize = require('sequelize');

const Albums = connector.define('Albums', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING(64),
		allowNull: true
	},
	type: {
		type: Sequelize.STRING(64),
		allowNull: true
	},
	genre: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	publisher: {
		type: Sequelize.STRING(64),
		allowNull: true
	},
	agency: {
		type: Sequelize.STRING(64),
		allowNull: true
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	sale_dt: {
		type: Sequelize.DATEONLY,
		allowNull: true
	},
	comment: {
		type: Sequelize.TEXT,
		allowNull: true
	}
}, {
	freezeTableName: true,
	underscored: true,
	timestamps: false
});

module.exports = Albums;