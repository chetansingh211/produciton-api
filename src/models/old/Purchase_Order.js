/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('purchase_order', {
		purchase_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true, 
			autoIncrement: true
		},
		purchase_order_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		order_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		order_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		order_catagory: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		order_issued_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		advance_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		order_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_value: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bank_guarantee: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		retention_money: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		tax_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		freight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		insurance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		excise_duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		customs_fees: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		airport_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		clearance_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		miscellaneous_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fob_in_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fob_in_irs: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		exchange_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		status: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		po_issued_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		po_authorised_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		despatch_mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cancel_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		payment_terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		po_terms: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		start_delivery_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end_delivery_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'purchase_order'
	});
};
