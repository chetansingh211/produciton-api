/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_parts_Issue_Rtn', {
		System_Key: {
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
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Part_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Challan_Type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Return_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Related_challan: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_parts_Issue_Rtn'
	});
};
