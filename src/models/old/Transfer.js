/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Transfer', {
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Transferee_Name: {
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
		Registration_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Registration_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Registration_Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Premium_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Unit_Of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CATEGORY: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Transfer'
	});
};
