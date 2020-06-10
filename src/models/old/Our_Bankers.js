/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Our_Bankers', {
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Our_Account: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transaction_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Banker_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address_1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		E_mail: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SWIFT_account_code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Our_Bankers'
	});
};
