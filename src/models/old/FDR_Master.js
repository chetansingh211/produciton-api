/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FDR_Master', {
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		FDR_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		IS_Margin_Money: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Forefieture_Refund: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		FDR_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		FDR_Due_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Forefieture_Refund_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Forefieture_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Forefieture_Amount_Refund: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_FDR_Utilized: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Period_in_days: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FDR_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TDS_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Interest_to_Receive: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Interest_Received: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Interest_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Pre_Interest_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TDS_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Company_CODE: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Previous_FDR_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FD_Favouring: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bank_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Beneficiary_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Dispute_Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LF_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FD_A_c_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bank_FDR_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fdr_status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		final_maturrity_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		status_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		maturity_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'FDR_Master'
	});
};
