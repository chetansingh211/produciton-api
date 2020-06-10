/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goods_receipt_details', {
		goods_receipt_detail_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		production_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		challan_number: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		received_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		inspected_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		passed_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_qty: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rate_received: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rejected_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		item_width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		lfold: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		debit_note_no: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'goods_receipt_details'
	});
};
