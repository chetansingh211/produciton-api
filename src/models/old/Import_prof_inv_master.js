/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Import_prof_inv_master', {
		proforma_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Proforma_Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Proforma_Invoice_Date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		FOB_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Insurance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Freight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Commission: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Proforma_Value: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		Shipment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Landing_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Payment_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Nature_of_Contract: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Tentative_Net_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Tentative_Gross_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Mode_of_Shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendor_Bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Confirmed_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Confirmed_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Pi_Received_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Import_prof_inv_master'
	});
};
