/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FCFS_Application', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Company_Master',
				key: 'Company_code'
			}
		},
		Appl_Ref_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'AEPC_Other_regulatory_Details',
				key: 'Agency_Code'
			}
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'Bank_Master',
				key: 'Bank_Code'
			}
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Application_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Fiber_Content: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Made_For: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity_in_Pieces: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FOB_Rate_FCY: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FOB_value_FCY: {
			type: "MONEY",
			allowNull: true
		},
		Council_Chgs_Cheque_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Council_Chgs_Cheque_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Council_Chgs_Amount: {
			type: "MONEY",
			allowNull: true
		},
		App_BG_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Authorized_Signatory: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Token_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Token_Date: {
			type: DataTypes.DATE,
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
		Description_of_item: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FOB_Rate_per_piece_in_INR: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		FOB_Value_in_INR: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		EMD_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EMD_Bank_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_Validity_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EMD_Deposit_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		QC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cut_of_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		pro_rata: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Current_Year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		transferred_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		transfer_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FOB_LC_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Balance_amount_of_LC: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'FCFS_Application'
	});
};
