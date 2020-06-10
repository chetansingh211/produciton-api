/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('process_item_ordered', {
		process_item_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		process_order_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity_ordered: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		processing_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		damage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		processing_shrinkage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		residual_shrinkage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fold: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		total_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'process_item_ordered'
	});
};
