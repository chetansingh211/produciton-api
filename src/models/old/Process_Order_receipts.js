/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_Order_receipts', {
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
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Bill_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_Quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rct_date: {
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
		Rejected_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Receiving_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		LFold: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Returned_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Balance_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Process_Order_receipts'
	});
};
