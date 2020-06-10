/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ledger_detail', {
		ledger_detail_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		process_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		challan_number: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		challan_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		challan_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vendor_ref_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		qty_received: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		qty_issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		rct_date: {
			type: DataTypes.DATE,
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
		opening_stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'ledger_detail'
	});
};
