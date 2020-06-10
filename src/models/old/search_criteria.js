/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('search_criteria', {
		criteria_for: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		criteria: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		col_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		table_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_values: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'search_criteria'
	});
};
