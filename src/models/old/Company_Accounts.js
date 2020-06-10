/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Company_Accounts', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Account_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Contact_Person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Purpose: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Opening_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Port_of_Loading: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Company_Accounts'
	});
};
