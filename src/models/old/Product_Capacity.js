/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Product_Capacity', {
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Product_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Capacity_Year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Capacity_Month: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Planned_Capacity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Order_Booked: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Product_Capacity'
	});
};
