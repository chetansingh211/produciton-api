/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BO_Process_Order_Link', {
		System_key: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Process_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity_Allocated: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Measurement_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'BO_Process_Order_Link'
	});
};
