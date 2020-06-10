/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_Rates', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Percent_value: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Rate_in_Amount_FOB: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Rate_in_Amount_BGT: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_FOB_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_BGT_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Process_Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Process_Rates'
	});
};
