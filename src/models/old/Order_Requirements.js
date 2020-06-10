/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Order_Requirements', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
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
		Color_Id: {
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
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		process_sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Quantity_Required: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Item_Alloc: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Allocation_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		purchase_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Order_Requirements'
	});
};
