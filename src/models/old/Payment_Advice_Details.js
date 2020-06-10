/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Payment_Advice_Details', {
		Bill_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bill_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Payment_Advice_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bill_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Balance_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Advice_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Bill_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Due_Date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Payment_Advice_Details'
	});
};
