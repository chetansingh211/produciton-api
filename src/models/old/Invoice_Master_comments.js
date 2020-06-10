/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Invoice_Master_comments', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		comment1: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		comment1_x: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		comment1_y: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		comment2: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		comment2_x: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		comment2_y: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		comment3: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		comment3_x: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		comment3_y: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Invoice_Master_comments'
	});
};
