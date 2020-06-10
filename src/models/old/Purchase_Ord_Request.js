/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('purchase_ord_request', {
		purchase_order_request_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		purchase_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		color_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_of_quantity: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'purchase_ord_request'
	});
};
