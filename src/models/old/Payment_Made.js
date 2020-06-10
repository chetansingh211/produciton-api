/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Payment_Made', {
		Payment_Advice_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
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
		Payment_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Payment_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Payment_Advice_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Payment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Bill_Date: {
			type: DataTypes.DATE,
			allowNull: true
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
		Paid_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Payment_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Reference_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Name_of_Bank: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Payment_Made'
	});
};
