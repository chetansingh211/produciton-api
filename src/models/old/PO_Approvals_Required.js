/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PO_Approvals_Required', {
		Approval_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Schedule_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Shipment_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Approval_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Approved_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'PO_Approvals_Required'
	});
};
