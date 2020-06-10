/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bulk_Stock', {
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		stock_in_Hand: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Allocated_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		UOM: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Bulk_Stock'
	});
};
