/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Revalidation_Application_Detai', {
		Application_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_Certificate_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		sl_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Importers_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EMD_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		EMD_Validity: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EMD_Bank_Branch_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		reval_qc_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		endorsement_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fob_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		shipped_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Revalidation_Application_Detai'
	});
};
