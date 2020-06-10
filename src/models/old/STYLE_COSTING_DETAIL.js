/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('STYLE_COSTING_DETAIL', {
		ORDER_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STYLE_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PROCESS_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ITEM_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CONSUMPTION: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		RATE: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		TOTAL_AMT: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		BUYER_RATE: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		B_TOTAL_AMT: {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'STYLE_COSTING_DETAIL'
	});
};
