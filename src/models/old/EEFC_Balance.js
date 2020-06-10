/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EEFC_Balance', {
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Currency_Account: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EEFC_Opening_Balance: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		EEFC_Total_Debits: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		EEFC_Total_Credits: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		EEFC_Balance: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'EEFC_Balance'
	});
};
