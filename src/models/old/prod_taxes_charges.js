/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prod_taxes_charges', {
		Charge_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Prodn_Order_Id: {
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
		tableName: 'prod_taxes_charges'
	});
};
