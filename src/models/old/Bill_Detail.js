/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bill_Detail', {
		Bill_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bill_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Receipt_Number: {
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
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Bill_Detail'
	});
};
