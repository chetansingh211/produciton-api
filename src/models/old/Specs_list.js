/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Specs_list', {
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Specification_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Default_Values: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Calculation: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Specs_list'
	});
};
