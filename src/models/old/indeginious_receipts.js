/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('indeginious_receipts', {
		vendor_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		local_invoice_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		local_item_ref_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'indeginious_receipts'
	});
};
