/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shipment_details', {
		shipment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		shipment_details_sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		eou_item_ref_no: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Works_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		supplier_invoice_details_sno: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		supplier_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		epcg_master_sno: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reexport_item_no: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		depb_license_number: {
			type: DataTypes.STRING,
			allowNull: true
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
		fob_in_inr_for_item: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		freight_in_inr_for_item: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		insurance_in_inr_for_item: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cif_value_in_inr_for_item: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		custom_tariff_heading: {
			type: DataTypes.STRING,
			allowNull: true
		},
		custom_excise_heading: {
			type: DataTypes.STRING,
			allowNull: true
		},
		assesable_cif: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		basic_customs_duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		special_customs_duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		countervailing_duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		additional_countervailing_duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		excise_duty_of_special_importa: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		special_countervailing_duty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		duty_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		special_license_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		no_of_packages: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		date_of_zero_balance: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'shipment_details'
	});
};
