/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Other_Costs', {
		Cost_Factor: {
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
		Cost_per_unit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cost_Per_Unit_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Marginal_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Other_Costs'
	});
};
