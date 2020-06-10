/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BG_Master', {
		BG_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_CODE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IS_Block_BG: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		BG_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		BG_Date: {
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
		Amendment_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Amendment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		BG_Validity: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Commission_Paid: {
			type: DataTypes.FLOAT,
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
		Margin_Rate: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Margin_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'BG_Master'
	});
};
