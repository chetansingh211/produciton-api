/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('opening_stock_temp', {
		process_order_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		challan_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		challan_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		date_of_challan: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vendor_ref_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Qty_Received: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Qty_Issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		rct_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		item_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		average_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		stock_on_hand: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		opening_Stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		process_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Subtype: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'opening_stock_temp'
	});
};
