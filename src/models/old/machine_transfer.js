/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('machine_transfer', {
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Machine_Name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Related_Challan_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Receipt_flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Inspected_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Accepted_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Disputed_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'machine_transfer'
	});
};
