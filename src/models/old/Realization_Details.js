/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Realization_Details', {
		Bank_Ref_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Negotiation',
				key: 'Bank_Ref_Number'
			}
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Negotiation',
				key: 'Bank_Ref_Number'
			}
		},
		negotiation_or_collection1: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		negotiation_or_collection2: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		negotiation_or_collection3: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Bank_Reference_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Realization_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Realized_Date1: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Realized_Date2: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Realized_Date3: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Exchange_Rate1: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Exchange_Rate2: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Exchange_Rate3: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Interest_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Courier_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Margin_Money: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		OverDue_Interest: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		MC_Commission: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Commission_In_INR: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Commission_In_FCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Discount_In_INR: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Discount_In_FCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Margin_Money_Refund: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Interest_Refund: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_Refund: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Net_Realization: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Negotiation_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amount_Debited_INR: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		PCL_Adjusted_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		current_year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Total_Inv_Value: {
			type: "MONEY",
			allowNull: true
		},
		Realized_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Realized_Amount1: {
			type: "MONEY",
			allowNull: true
		},
		Realized_Amount2: {
			type: "MONEY",
			allowNull: true
		},
		Realized_Amount3: {
			type: "MONEY",
			allowNull: true
		},
		Amt_Credited_INR: {
			type: "MONEY",
			allowNull: true
		},
		EEFC_Credit_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Bank_Chgs_FC: {
			type: "MONEY",
			allowNull: true
		},
		Bank_Chgs_INR: {
			type: "MONEY",
			allowNull: true
		},
		PCL_Id: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'PCL_Master',
				key: 'PCL_Id'
			}
		},
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'AEPC_Other_regulatory_Details',
				key: 'Agency_Code'
			}
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Freely_Convertible_currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Licensing_Authority_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		new_currency_exchange_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		new_currency_factor: {
			type: DataTypes.STRING,
			allowNull: true
		},
		original_invoice_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		realization_status: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Realization_Details'
	});
};
