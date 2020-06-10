/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Purchase_Order_Items_Amended', {
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
		Amended_No: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Amended_Date: {
			type: DataTypes.DATE,
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
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate_perunit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Sizewise: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Process_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Item_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Item_Shrinkage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Item_Damage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Item_Lfold: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Target_Item: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amended_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Activity: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Purchase_Order_Items_Amended'
	});
};
