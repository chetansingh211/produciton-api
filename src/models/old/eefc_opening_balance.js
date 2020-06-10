/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('eefc_opening_balance', {
		financial_year_start: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		financial_year_end: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		financial_year_opening_balance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		financial_year_ending_balance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'eefc_opening_balance'
	});
};
