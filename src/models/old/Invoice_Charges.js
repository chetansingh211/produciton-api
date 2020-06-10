/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Invoice_Charges', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		DBK_Required: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		DEPB_Amount_INR: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		CHA_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TH_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Air_TPT_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Road_TPT_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Sea_TPT_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Rail_TPT_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Freight_Amount_Credit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_Charges_Credit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Term_Amount_in_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Term_Amount_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		HANGER_QUANTITY: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Total_Invoice_Value_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Total_Invoice_Value_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		FOB_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		FOB_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Insurance_Rate: {
			type: "MONEY",
			allowNull: true
		},
		Insurance_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Insurance_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Freight_Rate: {
			type: "MONEY",
			allowNull: true
		},
		Freight_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Freight_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Commission_Rate: {
			type: "MONEY",
			allowNull: true
		},
		Commission_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Commission_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Discount_Rate: {
			type: "MONEY",
			allowNull: true
		},
		Discount_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Discount_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Other_Deductions_Rate: {
			type: "MONEY",
			allowNull: true
		},
		Other_Deductions_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Other_Deductions_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Packing_Misc_Charges_Rate: {
			type: "MONEY",
			allowNull: true
		},
		Packing_Misc_Charges_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Packing_Misc_Charges_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		DBK_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Cess: {
			type: "MONEY",
			allowNull: true
		},
		Net_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Gross_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Gross_Volume_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Net_Net_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Cubage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBK_FOB: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		HANGER_RATE: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		HANGER_AMOUNT_IN_FCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		HANGER_AMOUNT_IN_INR: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Insurance_Company_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Policy_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Increase_Reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Commission_paid_to: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DBK_SCHEDULE_NUMBER: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DBK_RATE: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Invoice_Charges'
	});
};
