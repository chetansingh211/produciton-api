/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Invoice_Terms', {
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Term_Id: {
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
		display_in_qi_ci_or_both: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Invoice_Terms'
	});
};
