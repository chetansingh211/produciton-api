/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_Costing', {
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Marginal_Process: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Rate_processing: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate_processing_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Process_Costing'
	});
};
