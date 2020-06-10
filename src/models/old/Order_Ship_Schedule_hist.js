/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Order_Ship_Schedule_hist', {
		Shipment_Schedule: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Date_of_Change: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Set_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Scheduled_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Ship_to_Address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Mode_of_Shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Preferred_Courier: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Changed_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reason: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Order_Ship_Schedule_hist'
	});
};
