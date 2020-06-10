/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_order_challan', {
		Process_Order_Id: {
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
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sub_Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Date_of_Challan: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Date_of_Recipt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Bill_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendor_Ref_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Acceptance_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Our_Receipt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Issued_Received_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorized_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
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
		}
	}, {
		tableName: 'Process_order_challan'
	});
};
