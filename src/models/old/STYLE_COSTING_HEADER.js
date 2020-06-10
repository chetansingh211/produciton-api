/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('STYLE_COSTING_HEADER', {
		ORDER_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STYLE_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TOTAL_COST: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		OVERHEADS: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		COMMISSION: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		FOB_PRICE: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		B_TOTAL_COST: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		B_OVERHEADS: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		B_COMMISSION: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		B_FOB_PRICE: {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'STYLE_COSTING_HEADER'
	});
};
