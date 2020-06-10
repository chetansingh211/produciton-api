/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Monthwise_Ship_Capacity', {
		Month_Name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Shipment_Year: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Capacity: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Working_Days: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Monthwise_Ship_Capacity'
	});
};
