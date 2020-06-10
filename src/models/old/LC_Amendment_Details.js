/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Amendment_Details', {
		Serial_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Amendment_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Garment_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Men_Women_Child: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Size_Sequence: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fabric_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Rate: {
			type: "MONEY",
			allowNull: true
		},
		Amount: {
			type: "MONEY",
			allowNull: true
		},
		Invoiced_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Shipped_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Transferred_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amended_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		buyer_style_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exporter_reference: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Status_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Shipment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'LC_Amendment_Details'
	});
};
