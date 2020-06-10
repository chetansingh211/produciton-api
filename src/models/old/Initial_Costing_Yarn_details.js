/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Initial_Costing_Yarn_details', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Yarn: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Yarn_Component: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Knitting: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Wastage_Percentage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Processing: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Consumption: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Body_length: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Sleeve_length: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Fabric_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_CLR_CUF_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Yarn_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Initial_Costing_Yarn_details'
	});
};
