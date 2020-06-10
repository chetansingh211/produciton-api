/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stock_trans_item_details', {
		Challan_Number: {
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
		Flag_Sizewise: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Related_Challan_No: {
			type: DataTypes.STRING,
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
		tableName: 'stock_trans_item_details'
	});
};
