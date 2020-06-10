/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prodn_items_ordered', {
		production_order_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		size_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		style_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		color_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		garment_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		company_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Rate_per_piece: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		Measurement_unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity_Ordered: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		wastage_factor: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'prodn_items_ordered'
	});
};
