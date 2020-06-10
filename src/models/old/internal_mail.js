/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('internal_mail', {
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		sender: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		receiver: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		subject: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		received: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'internal_mail'
	});
};
