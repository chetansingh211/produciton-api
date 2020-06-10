/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Negotiation', {
		Bank_Ref_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PCL_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Pre_Neg_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bank_Reference_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Presented_On: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Realization_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Total_Inv_Value: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Bank_Chgs_FC: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Bank_Chgs_INR: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Exchange_Rate1: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Exchange_Rate2: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bill_of_Exchange_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Document_Nature: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		IS_Bill_Discounting: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		PCL_Adjusted_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Courier_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Interest_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Interest_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Negotiation_Amount1_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Negotiation_Amount2_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Negotiation_Amount1_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Negotiation_Amount2_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		BOE_Days: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Bank_Commission_To_Pay: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Margin_Money: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Buyer_bank_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Interest_Days: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		invoice_exchange_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Negotiation'
	});
};
