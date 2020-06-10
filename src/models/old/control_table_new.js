/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('control_table_new', {
		Key_value: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Prefix: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Starting_Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Current_Number: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Increment_By: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		company_id: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'control_table_new'
	});
};
