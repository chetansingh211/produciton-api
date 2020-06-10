/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_invoice', {
		supplier_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		L_application_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		invoice_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		invoice_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		fob_value_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		insurance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		freight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		commission: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_invoice_value: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		payment_terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Nature_of_Contract: {
			type: DataTypes.STRING,
			allowNull: false
		},
		net_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		gross_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: false
		},
		mode_of_shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		payment_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		confirmed_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		confirmed_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		exchange_rate: {
			type: "MONEY",
			allowNull: true
		},
		margin_money_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		margin_money_rcvd_back: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		no_of_packets: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		invoice_received_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		margin_money_rcvd_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'supplier_invoice'
	});
};
