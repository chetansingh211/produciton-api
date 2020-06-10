/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Proc_order_reissue_rej_detail', {
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
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Issue_Rate: {
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
		tableName: 'Proc_order_reissue_rej_detail'
	});
};
