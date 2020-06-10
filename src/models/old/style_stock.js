/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_stock', {
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
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Stock: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Value_Stock: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Valuation_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Receipts: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Issues: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'style_stock'
	});
};
