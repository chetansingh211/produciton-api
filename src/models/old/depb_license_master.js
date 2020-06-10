/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('depb_license_master', {
		depb_license_number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		license_date: {
			type: DataTypes.DATE,
			allowNull: true
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
			allowNull: true
		},
		export_obligation_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		import_value_in_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		import_value_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		depb_license_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		depb_invoice_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		issued_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		expiry_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		exchange_rate: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'depb_license_master'
	});
};
