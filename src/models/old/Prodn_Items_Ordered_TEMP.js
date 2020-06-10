/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_Items_Ordered_TEMP', {
		Production_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
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
		Rate_Per_Piece: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Measurement_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity_Ordered: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Wastage_Factor: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_Items_Ordered_TEMP'
	});
};
