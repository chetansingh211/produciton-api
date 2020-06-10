/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Shipment_detail', {
		Challan_No: {
			type: DataTypes.DOUBLE,
			allowNull: false
		},
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Style_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Order_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Buyer_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Qty_shipped: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		Invoice_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		production_manager: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Shipment_detail'
	});
};
