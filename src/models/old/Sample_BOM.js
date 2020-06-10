/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample_BOM', {
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Consumption: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Measurement_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Wastage_Factor: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Costing_cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Sample_BOM'
	});
};
