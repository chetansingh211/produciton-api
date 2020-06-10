/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Tax', {
		Type_Of_Addition_Deduction: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Addition_Deduction: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_Of_Rate: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Tax'
	});
};
