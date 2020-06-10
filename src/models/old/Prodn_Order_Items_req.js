/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_Order_Items_req', {
		System_key: {
			type: DataTypes.BIGINT,
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
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Production_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Quantity_Required: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Measurement_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_Order_Items_req'
	});
};
