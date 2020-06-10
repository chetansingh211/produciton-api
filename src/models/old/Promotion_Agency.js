/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Promotion_Agency', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Agency_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reg_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reg_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Reg_Validity: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Contact_Person: {
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
			type: DataTypes.STRING,
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
		Phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Telex: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMail: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Promotion_Agency'
	});
};
