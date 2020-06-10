/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EEFC_MASTER', {
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
		Account_Number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		remarks: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'EEFC_MASTER'
	});
};
