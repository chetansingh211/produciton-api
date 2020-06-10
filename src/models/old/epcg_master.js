/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('epcg_master', {
		epcg_master_sno: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		epcg_license_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		epcg_license_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		notification_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		custom_registration_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		export_obligation_in_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		export_obligation_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		import_value_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		export_obligation_currency: {
			type: DataTypes.STRING,
			allowNull: false
		},
		expiry_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		epcg_invoice_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		epcg_ship_bill_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'epcg_master'
	});
};
