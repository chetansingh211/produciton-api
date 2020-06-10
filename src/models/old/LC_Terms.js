/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Terms', {
		Term_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Less_or_Add: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Percentage_or_Amount: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Term_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Term_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Base_for_Calculation: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Display_in_quota_invoice: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'LC_Terms'
	});
};
