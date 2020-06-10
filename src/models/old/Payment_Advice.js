/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Payment_Advice', {
		Payment_Advice_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Payment_Advice_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Total_Advice_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Payment_Advice_Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Billing_Period_From: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Billing_Period_To: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Payment_Made_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Authorized_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Aurhorized_on: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Payment_Advice'
	});
};
