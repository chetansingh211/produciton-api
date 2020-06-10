/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Supplier_invoice_details', {
		supplier_invoice_details_sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		supplier_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Proforma_Invoice_Details_Sno: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		proforma_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		unit_price_in_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		unit_of_measurement: {
			type: DataTypes.STRING,
			allowNull: false
		},
		vendor_item_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		quantity_in_unit_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		duty_payable: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Supplier_invoice_details'
	});
};
