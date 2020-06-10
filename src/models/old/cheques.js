/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cheques', {
		Cheque_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Cheque_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Dispute_Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		issued_to: {
			type: DataTypes.STRING,
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
			allowNull: false
		},
		Forefieture_Amount_Refund: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Forefieture_Refund_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		purpose: {
			type: DataTypes.STRING,
			allowNull: true
		},
		favouring: {
			type: DataTypes.STRING,
			allowNull: true
		},
		beneficiary: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'cheques'
	});
};
