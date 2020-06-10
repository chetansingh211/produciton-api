/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('po_item_sizewise', {
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		size: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Qty: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate_per_unit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_of_rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'po_item_sizewise'
	});
};
