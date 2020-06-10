/* jshint indent: 1 */
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcryptjs');
const config = require('../config/config.json');
const sql = require('mssql');

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		freezeTableName: true,
		timestamps: false
	},
	{
		tableName: 'users'
	});
};