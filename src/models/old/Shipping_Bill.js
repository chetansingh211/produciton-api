/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Shipping_Bill', {
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		EPCopy_Received: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Shipping_Bill_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		AR4_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		QC_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		RBI_Approval_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		BL_AWB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		GSP_Certificate_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		VISA_Certificate_origin_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EP_Copy_Received_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		QDB_Copy_Received_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Export_Certificate_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Insurance_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		SB_footer_declaration: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Shipping_Bill_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipping_Bill_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AR4_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		QC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Export_Trade_Control: {
			type: DataTypes.STRING,
			allowNull: true
		},
		RBI_Approval_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rotation_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Export_Under: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buying_Agent_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BL_AWB_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GSP_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		VISA_Certificate_origin_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Name_of_Airlines: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Export_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Name_of_Insurance_Company: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Insurance_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		SB_detail_declaration: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Frieght_Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exchange_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		House_AWB_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Custom_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Name_of_Transporter: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vessel_Flight_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Master_AWB_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		House_AWB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Master_AWB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		mate_receipt_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mate_receipt_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		flight_sailed_on_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Shipment_Movement_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Document_Received_From_Agent: {
			type: DataTypes.DATE,
			allowNull: true
		},
		actual_gross_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		actual_freight_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		EP_Copy_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PMV: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		docs_sent_to_agent_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		original_docs_sent_on: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Shipping_Bill'
	});
};
