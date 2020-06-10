/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_license_imports', {
		adv_license_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		adv_license_item_ref_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		quantity: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		unit_of_measurement: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		currency: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		import_value_fcy: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		import_value_inr: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		license_item_desc: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		license_conversion_factor: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'adv_license_imports'
	});
};
