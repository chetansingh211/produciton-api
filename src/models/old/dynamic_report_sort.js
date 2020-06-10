/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dynamic_report_sort', {
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
		sorting: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'dynamic_report_sort'
	});
};
