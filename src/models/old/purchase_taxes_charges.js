/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('purchase_taxes_charges', {
		Charge_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Add_Deduct: {
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
		tableName: 'purchase_taxes_charges'
	});
};
