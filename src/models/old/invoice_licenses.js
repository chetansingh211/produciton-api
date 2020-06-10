/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoice_licenses', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		shipment_ref_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		epcg_master_sno: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'invoice_licenses'
	});
};
