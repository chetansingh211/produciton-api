/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('payment_proforma_details', {
		payment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		proforma_invoice_ref_no: {
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
		tableName: 'payment_proforma_details'
	});
};
