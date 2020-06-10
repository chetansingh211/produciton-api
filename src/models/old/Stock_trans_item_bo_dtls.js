/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Stock_trans_item_bo_dtls', {
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
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bo_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Stock_trans_item_bo_dtls'
	});
};
