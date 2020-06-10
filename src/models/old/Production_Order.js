/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Production_Order', {
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Sub_Process_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Issued_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorised_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Auth_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Total_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Despatch_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Date_Status_Change: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Status_Changed_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cancel_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Start_Delivery_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		End_Delivey_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Sampling_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Dept_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Dept_or_Vendor: {
			type: DataTypes.CHAR,
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
		process_sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Internal_Po_No: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Production_Order'
	});
};
