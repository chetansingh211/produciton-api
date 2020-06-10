/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dynamic_report_values', {
		dataobject: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		report_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		column_name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		group_number: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		space: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		visible: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tag: {
			type: DataTypes.STRING,
			allowNull: true
		},
		x: {
			type: DataTypes.STRING,
			allowNull: true
		},
		y: {
			type: DataTypes.STRING,
			allowNull: true
		},
		width: {
			type: DataTypes.STRING,
			allowNull: true
		},
		height: {
			type: DataTypes.STRING,
			allowNull: true
		},
		format: {
			type: DataTypes.STRING,
			allowNull: true
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		repeat: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_band: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'dynamic_report_values'
	});
};
