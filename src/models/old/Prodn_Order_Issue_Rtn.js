/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_Order_Issue_Rtn', {
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
		Size_Id: {
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
		challan_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Return_Reason: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Return_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity_in_pieces: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		related_challan: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Lfold: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sub_Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bal_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_Order_Issue_Rtn'
	});
};
