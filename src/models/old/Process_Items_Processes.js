/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_Items_Processes', {
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Machine: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cycle_Time: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Time_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ShiftA: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		ShiftB: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Needle: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Process_Items_Processes'
	});
};
