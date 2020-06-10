/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_order_reissue_reject', {
		Rejection_Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
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
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Process_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Debit_Note_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Rejected_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorized_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorized_date: {
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
		}
	}, {
		tableName: 'Process_order_reissue_reject'
	});
};
