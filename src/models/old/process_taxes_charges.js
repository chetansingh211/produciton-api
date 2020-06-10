/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('process_taxes_charges', {
		ChargeType: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Add_or_Deduct: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Percentage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'process_taxes_charges'
	});
};
