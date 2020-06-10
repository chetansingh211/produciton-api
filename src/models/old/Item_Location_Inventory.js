/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('item_location_inventory', {
		item_location_inventory_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false

		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		procurement_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		conversion_factor: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		conversion_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		opening_stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		value_opening_stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_receipts: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		value_total_receipts: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		value_total_issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		stock_in_hand: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		value_of_stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		item_allocated: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		item_allocated_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_stock: {
			type: DataTypes.STRING,
			allowNull: true
		},
		unit_stockvalue: {
			type: DataTypes.STRING,
			allowNull: true
		},
		inspected_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		ordered_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unallocated_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		goods_at_premises: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_requested: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_rejection_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_rejection_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_disputed_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_reissue_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		freezeTableName: true,
		timestamps: false
	  },{
		tableName: 'ItemLocationInventory'
	});
};
