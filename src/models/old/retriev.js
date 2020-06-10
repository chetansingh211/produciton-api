/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('retriev', {
		Left_Brace: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Criteria: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Operator: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Value: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Right_brace: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		And_or: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		col_name: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Table_name: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'retriev'
	});
};
