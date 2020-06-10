/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DBK_Remittance', {
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		DBK_Master_SNO: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Amount_Received_INR: {
			type: "MONEY",
			allowNull: true
		},
		Amount_Waived_off_INR: {
			type: "MONEY",
			allowNull: true
		},
		Date_of_Remittance: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Location: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cheque_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bank_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		account_number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'DBK_Remittance'
	});
};
