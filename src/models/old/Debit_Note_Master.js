/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Debit_Note_Master', {
		Debit_Note_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Debit_Note_Date: {
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
		Authorized_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vehicle_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Thru_Person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Process_Type: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Debit_Note_Master'
	});
};
