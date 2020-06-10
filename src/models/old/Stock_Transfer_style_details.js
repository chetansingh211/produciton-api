/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Stock_Transfer_style_details', {
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Related_Challan_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Receipt_flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Inspected_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Accepted_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Disputed_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Stock_Transfer_style_details'
	});
};
