/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PRINT_TEMP1', {
		item_subtype: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rate_received: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		opening_bal: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		purchase_qty: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		issue_qty: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		receipt_qty: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		rejection: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		Closing_balance: {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'PRINT_TEMP1'
	});
};
