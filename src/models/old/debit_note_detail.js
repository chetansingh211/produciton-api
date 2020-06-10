/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('debit_note_detail', {
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Debit_Note_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		System_Key: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
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
		Process_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Old_Rate: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		New_Rate: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Value: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Reason: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'debit_note_detail'
	});
};
