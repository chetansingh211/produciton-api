/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Sub_Transfer_Details', {
		Transfer_Date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		Xfer_Serial_No: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false
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
			type: DataTypes.STRING,
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
		}
	}, {
		tableName: 'LC_Sub_Transfer_Details'
	});
};
