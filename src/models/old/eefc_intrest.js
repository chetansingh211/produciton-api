/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('eefc_intrest', {
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
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		remarks: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'eefc_intrest'
	});
};
