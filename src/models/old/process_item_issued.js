/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('process_item_issued', {
		process_order_item_issued_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		process_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		challan_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		challan_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		quantity_to_be_issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		wastage_factor: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		quantity_issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		item_width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'process_item_issued'
	});
};
