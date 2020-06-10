/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Despatch_Notification', {
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Schedule_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sister_Concern_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Despatch_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Unit_Quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Despatch_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reference_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reference_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Despatch_To: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Info_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Despatch_Notification'
	});
};
