/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_Order_Approval', {
		Approval_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Approval_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		App_desc: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Approved_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Approved_On: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Shipment_mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Process_Order_Approval'
	});
};
