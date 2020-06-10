/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bill_new', {
		Bill_Type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Bill_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Order_Type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Order_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Receipt_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false
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
		tableName: 'bill_new'
	});
};
