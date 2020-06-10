/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Opening_Master', {
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Buyer',
				key: 'Buyer_Id'
			}
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Company_Master',
				key: 'Company_code'
			}
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LC_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LC_Amount: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Validity: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Last_date_of_Shipment: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LC_Amount_utilized: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Transferable: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Original_beneficiary_or_transf: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		LC_Charges: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Irrevocable: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Authenticated_by_Bank: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		LC_Operative: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		LC_attested: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		LC_amount_amended: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_amount_Transferred: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Upper_Rate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Lower_Rate: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Upper_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Lower_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Negotiable_Bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Opening_Bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		LC_Amount_Added: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Amount_Deducted: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Is_LC_Transferred: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		LC_Bank_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Assignment_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Port_Of_Loading: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Period_of_Presentation: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Amendment_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Amendment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LC_Balance: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		LC_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfer_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfer_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Transfered_From: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfered_comp_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Is_LC_Amended: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		LC_Freely_Negotiable: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'LC_Opening_Master'
	});
};
