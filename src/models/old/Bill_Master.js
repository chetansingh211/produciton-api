/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bill_Master', {
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
		Form_Id: {
			type: DataTypes.STRING,
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
		Bill_Balance_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Payment_Due_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Excise_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		CST_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		LST_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Freight_and_Cartage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Discount_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TDS_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TDS_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Freight_Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Freight_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Name_of_Transport: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transport_Reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transport_From: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transport_To: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transported_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Received_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		HAWB_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		HAWB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		AWB_BL_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AWB_BL_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Insurance_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Custom_Duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Handling_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Import_LC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Import_LC_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ST_Form_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ST_Form_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ST_Form_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Entered_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Material_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Payment_Advice_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Advice_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Bill_Status: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Related_Bill_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Net_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Bill_Master'
	});
};
