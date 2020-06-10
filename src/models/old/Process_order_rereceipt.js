/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_order_rereceipt', {
		Rereceipt_Challan_Number: {
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
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Process_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Rejection_Challan_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Received_By: {
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
		}
	}, {
		tableName: 'Process_order_rereceipt'
	});
};
