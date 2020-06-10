/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Policy_Increase', {
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
		Increase_Reference: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Increase_Reference_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
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
			type: "MONEY",
			allowNull: true
		},
		Increased_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Policy_Increase'
	});
};
