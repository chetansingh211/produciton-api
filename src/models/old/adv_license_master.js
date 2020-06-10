/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_license_master', {
		adv_license_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		adv_license_desc: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		adv_license_date: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		notification_no: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		custom_registration_no: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		export_obligation_in_fcy: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		export_obligation_in_inr: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		export_obligation_in_pcs: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		import_value_in_fcy: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		import_value_in_inr: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		currency: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		invoice_description: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		issued_date: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		expiry_date: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		exchange_rate: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		deec_number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		net_weight_flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		remarks: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'adv_license_master'
	});
};
