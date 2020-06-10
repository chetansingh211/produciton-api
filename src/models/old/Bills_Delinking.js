/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bills_Delinking', {
		bank_reference_number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		delink_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		loan_exchange_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		loan_amount_fcy: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		previous_exchange_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		interest_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		interest_days: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		interest_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		account_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Bills_Delinking'
	});
};
