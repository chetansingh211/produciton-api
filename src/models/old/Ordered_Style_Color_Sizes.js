/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Ordered_Style_Color_Sizes', {
		Size_Id: {
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
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity_Required: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Price_Per_Piece: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Cost_Per_piece: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		SKU_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_Quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size_Ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Packed_Quantity: {
			type: DataTypes.DECIMAL,
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
		buyer_style_id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Ordered_Style_Color_Sizes'
	});
};
