/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Size_Costing', {
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
		Conversion_type: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Total_BOM_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Marginable_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Non_marginable_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cost_in_Converted_CCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cost_LCY_Buyer: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_BOM_Cost_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Marginable_Cost_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Non_marginable_Cost_B: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		other_cost_factors_Bu: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Cost_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_Cost_Non_Marginal: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Margin_in_Percentage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Margin_in_Percentage_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Commission: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Commision_budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Commission_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		rate_Conv_CCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Rate_to_buyer_LCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Converted_Ccy: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_LCY: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comment: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Size_Costing'
	});
};
