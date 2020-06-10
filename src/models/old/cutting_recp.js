/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cutting_recp', {
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
		Internal_or_External: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Department_or_Vendor: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Department_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sub_Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Issued_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorized_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorization_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Vehicle_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Through_Person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendor_Bill_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendor_Bill_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		order_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		style_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		passed_bill_number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		passed_bill_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'cutting_recp'
	});
};
