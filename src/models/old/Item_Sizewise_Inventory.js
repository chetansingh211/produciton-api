/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('item_sizewise_inventory', {
		item_sizewise_inventory_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false

		},
		size_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		company_id: {
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
		opening_stock_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_rcpts: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_rcpts_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_issued_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		stock_inhand: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		stock_inhand_value: {
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
        }

	},{
		freezeTableName: true,
		timestamps: false
	  }, {
		tableName: 'ItemSizewiseInventory'
	});
};
