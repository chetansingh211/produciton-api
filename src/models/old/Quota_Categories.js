/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Categories', {
		Segment: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Category: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Country_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Category_Group: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Category_Sub_Group: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Annual_Level: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Quantitative_Ceiling: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		BG_EMD_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Harmonized_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fast_slow_moving_item: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Export_Tariff_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Conv_factor_number_part: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Conv_factor_measur_part: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Conv_factor_unit_part: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_BG_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		EMD_BG_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Made_For: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fiber: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Categories'
	});
};
