/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('purchase_order_request_items', {
		purchase_order_request_items_id: {
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
		color_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		garment_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		size_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity_requested: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		flag: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'purchase_order_request_items'
	});
};
