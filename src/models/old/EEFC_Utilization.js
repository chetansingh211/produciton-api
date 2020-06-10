/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EEFC_Utilization', {
		EEFC_ID: {
			type: DataTypes.STRING,
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
		Draft_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Purpose: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Utilized_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Draft_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Debit_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'EEFC_Utilization'
	});
};
