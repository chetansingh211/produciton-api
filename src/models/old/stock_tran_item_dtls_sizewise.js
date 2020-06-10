/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stock_tran_item_dtls_sizewise', {
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Size: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'stock_tran_item_dtls_sizewise'
	});
};
