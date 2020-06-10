/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_Ord_Despatch', {
		Schedule_No: {
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
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sister_Concern: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Despatch_dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Despatch_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Measurement_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Despatch_mode: {
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
		Info_mode: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Process_Ord_Despatch'
	});
};
