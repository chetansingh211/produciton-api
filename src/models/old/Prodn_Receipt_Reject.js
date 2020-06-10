/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_Receipt_Reject', {
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
		Prodn_Order_Id: {
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
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Rejection_Reason: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Part_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Related_Challan: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Debit_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Inspected_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Accepted_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Reject_Reissue_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Actual_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Style_Color_size_wise: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Reminant_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_Receipt_Reject'
	});
};
