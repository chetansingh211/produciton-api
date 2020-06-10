/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Insurance_Declaration', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
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
		Application_Insurance_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Application_Insurance_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sum_Insured: {
			type: "MONEY",
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
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
		}
	}, {
		tableName: 'Insurance_Declaration'
	});
};
