/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_order_rereceipt_detail', {
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
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rejection_Challan_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
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
		Rejected_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Item_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Re_Receiving_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		LFold: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Process_order_rereceipt_detail'
	});
};
