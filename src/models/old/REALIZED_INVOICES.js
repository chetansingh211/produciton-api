/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('REALIZED_INVOICES', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Ref_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		sno: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Value: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Realized_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Realized_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Realized_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Write_Off: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Claim_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'REALIZED_INVOICES'
	});
};
