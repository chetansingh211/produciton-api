/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_Delivery_schedule', {
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Schedule_No: {
			type: DataTypes.STRING,
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
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size_Id: {
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
		Date_of_Delivery: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Shipment_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Ship_to_Party: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ship_Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ship_Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ship_Address_city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ship_Address_State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ship_Address_Pin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ship_Address_Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		delivery_location: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_Delivery_schedule'
	});
};
