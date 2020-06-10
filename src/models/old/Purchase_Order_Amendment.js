/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Purchase_Order_Amendment', {
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Amended_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Amended_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Form_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Form_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PO_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PO_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		PO_Issued_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PO_Authorised_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PO_Authorised_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		PO_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Value: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Despatch_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cancel_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		PO_Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Advance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Bank_Guarantee: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Retention_Money: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		CST: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		LST: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Freight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Insurance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Excise_Duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Customs: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Airport_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Clearance_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Miscellaneous_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FOB_In_FCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FOB_In_IRS: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exchange_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		PO_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Start_Delivery_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		End_Delivery_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Adhoc_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Amended_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Activity: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Purchase_Order_Amendment'
	});
};
