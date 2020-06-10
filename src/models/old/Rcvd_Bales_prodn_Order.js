/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Rcvd_Bales_prodn_Order', {
		Bale_Number: {
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
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Production_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Order_Number: {
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
		Size_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		No_of_Thans: {
			type: DataTypes.DECIMAL,
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
		Bale_reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Rcvd_Bales_prodn_Order'
	});
};
