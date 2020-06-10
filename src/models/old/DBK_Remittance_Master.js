/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DBK_Remittance_Master', {
		DBK_Master_SNO: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cheque_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cheque_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Credit_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Received_During_From_Period: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Received_During_To_Period: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reference_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		remarks: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cheque_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		port_of_loading: {
			type: DataTypes.STRING,
			allowNull: true
		},
		account_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bank_code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'DBK_Remittance_Master'
	});
};
