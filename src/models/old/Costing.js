/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Costing', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_BOM_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Marginable_Process_cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Non_marginable_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Other_Costs: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Margin_in_percentage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Base_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Converted_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Local_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Conv_Rate_to_A: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Conv_Rate_to_B: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Conversion_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cost_in_base_ccy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cost_in_Converted_ccy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cost_in_lcy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Comment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Quota_Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Season: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Theme: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fabric: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Style_Group: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size_sequence: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Costing_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		authorised_flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		authorised_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		authorised_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		authorised_comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Commission: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Avg_Size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Inc_Perc: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Costing'
	});
};
