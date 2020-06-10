/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Shipment_Tracking', {
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Shipment_Schedule: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity_Shipped: {
			type: DataTypes.REAL,
			allowNull: true
		}
	}, {
		tableName: 'Shipment_Tracking'
	});
};
