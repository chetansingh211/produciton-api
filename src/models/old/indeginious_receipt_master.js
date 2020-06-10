/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('indeginious_receipt_master', {
		local_invoice_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		vendor_code: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		ct_3_number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		local_invoice_date: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'indeginious_receipt_master'
	});
};
