/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('payment_invoice_details', {
		payment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		supplier_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		final_or_partial_payment: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'payment_invoice_details'
	});
};
