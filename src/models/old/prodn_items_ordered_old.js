/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prodn_items_ordered_old', {
		Production_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false
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
		tableName: 'prodn_items_ordered_old'
	});
};
