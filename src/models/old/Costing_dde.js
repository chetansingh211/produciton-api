/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Costing_dde', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Total_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Non_marginal_OH: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Cost_to_Company: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Commission: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Margin: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Exchange_Rate_A: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Exchange_Rate_B: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Converted_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer_Cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Local_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Converted_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Costing_dde'
	});
};
