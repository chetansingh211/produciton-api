/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dynamic_report_formats', {
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
		format_sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		format: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'dynamic_report_formats'
	});
};
