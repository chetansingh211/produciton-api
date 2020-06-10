/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Adhoc_Receipts', {
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adhoc_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adhoc_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Related_Adhoc_Issue_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Received_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Received_Rate: {
			type: DataTypes.DECIMAL,
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
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Allocated_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Adhoc_Receipts'
	});
};
