/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ledger_master', {
		ledger_master_id:{
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement : true
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		opening_Stock: {
			type: DataTypes.DECIMAL,
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
		closing_stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		average_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		stock_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'ledger_master'
	});
};
