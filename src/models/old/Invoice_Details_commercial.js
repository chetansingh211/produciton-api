/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Invoice_Details_commercial', {
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Color_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Fabric_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Dtl_sno: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Product_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Endorsement_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Endorsed_Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country_Code: {
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
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Job_Order_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ticket_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Serial_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Application_Ref_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Adv_License_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DBK_Schedule_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_of_measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amount: {
			type: "MONEY",
			allowNull: true
		},
		Frieght_Amount_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Insurance_in_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Frieght_Amount_in_IRS: {
			type: "MONEY",
			allowNull: true
		},
		Insurance_in_IRS: {
			type: "MONEY",
			allowNull: true
		},
		DBK_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Statistical_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Code: {
			type: DataTypes.STRING,
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
		Size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Garment_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Men_Women_Child: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size_Sequence: {
			type: DataTypes.STRING,
			allowNull: true
		},
		style_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency: {
			type: DataTypes.STRING,
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
		Segment_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Packing_list_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer_style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Gross_Volume_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Based_on_BO_or_PL: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Buyer_Style_Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Store: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Department: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Mediator_Buyer_Style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		UPC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exporter_reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OTB: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Term_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		LC_DESCRIPTION: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		print_sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		dbk_item_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		non_dbk_item_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		custom_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_style_group_description1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_style_group_description2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Hanger_Quantity: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Hanger_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Invoice_Details_commercial'
	});
};
