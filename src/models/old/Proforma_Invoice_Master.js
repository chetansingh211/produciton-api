/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Proforma_Invoice_Master', {
		Pro_Inv_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		based_on_buyer_order: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		flag_pi_or_i: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Is_Free_Invoice: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Pro_Inv_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Buyer_ref_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LC_opened_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Courier_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		number_of_packages: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Courier_Charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		remarks: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exporter_ref: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_ref: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Port_of_discharge: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Port_of_loading: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Place_of_receipt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Final_destination: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country_of_origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Final_dest_country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Mode_of_shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Delivery_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Kind_of_packages: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Description_of_goods: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		exporters_reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Courier_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Agency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Department: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Person_Incharge: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Name_of_Person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipping_Bill_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipping_Bill_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		BL_AWB_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BL_AWB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Proforma_Invoice_Master'
	});
};
