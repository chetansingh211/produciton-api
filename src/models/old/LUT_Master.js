/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LUT_Master', {
		LUT_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Beneficiary: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Purpose: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Favouring: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LUT_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LUT_Validity: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Forefieture_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Forefieture_Refund: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Forefieture_Amount_Refund: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Forefieture_Refund_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Dispute_Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LUT_Amount_Debit: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		LUT_Amount_Credit: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		LUT_Balance: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		LUT_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'LUT_Master'
	});
};
