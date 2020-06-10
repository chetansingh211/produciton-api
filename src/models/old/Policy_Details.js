/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Policy_Details', {
		Insurance_Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Policy_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Policy_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Policy_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Terms_of_Cover: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Types_of_Cover: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exports_Declaration1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exports_Declaration2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Insurable_Percentage: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Insurance_Rate: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Rate_Per_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Opening_Balance: {
			type: "MONEY",
			allowNull: true
		},
		Increased_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Utilised_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Added_Back_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Closing_Balance: {
			type: "MONEY",
			allowNull: true
		},
		Cheque_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cheque_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Cheque_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'Policy_Details'
	});
};
