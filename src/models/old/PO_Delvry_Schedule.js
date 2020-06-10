/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PO_Delvry_Schedule', {
		Schedule_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Delivery_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Shipment_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Party: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Start_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		End_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		delivery_location: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'PO_Delvry_Schedule'
	});
};
