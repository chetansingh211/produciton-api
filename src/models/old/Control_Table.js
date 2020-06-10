/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Control_Table', {
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
		}
	}, {
		tableName: 'Control_Table'
	});
};
