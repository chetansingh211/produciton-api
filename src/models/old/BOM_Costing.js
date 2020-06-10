/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BOM_Costing', {
		Item_Id: {
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
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Average_Consumption: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Wastage_percentage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate_for_Costing: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		PPLT_Process: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Average_Consumption_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Wastage_percentage_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Rate_for_Costing_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Value_Budget: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Fabric_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Accessory_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Fab_value_Bgt: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Acc_value_Bgt: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'BOM_Costing'
	});
};
