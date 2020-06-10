/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bill_of_exchange', {
		pre_neg_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		lc_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		bank_address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		applicant_address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		display_bank_address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		display_applicant_address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		signatory: {
			type: DataTypes.STRING,
			allowNull: true
		},
		boe_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		display_prenegno: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'bill_of_exchange'
	});
};
