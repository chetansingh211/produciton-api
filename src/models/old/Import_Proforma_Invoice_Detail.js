/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Import_Proforma_Invoice_Detail', {
		Proforma_Invoice_Details_Sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		proforma_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Vendor_Item_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Colour: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size_unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_Price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		quantity_in_unit_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		Unit_of_Measurement: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Insurance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Freight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amount: {
			type: DataTypes.DECIMAL,
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
		Duty_Payable: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Import_Proforma_Invoice_Detail'
	});
};
