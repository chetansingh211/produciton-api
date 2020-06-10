/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bank_Master', {
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Name_of_the_Bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Name_of_Branch: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Pin_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorised_Dealer: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Bank_Master'
	});
};
