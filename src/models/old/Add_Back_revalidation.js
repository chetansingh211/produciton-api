/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Add_Back_revalidation', {
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Addback_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Endorsed_Category: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		auto_increment: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Endorsement_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Application_Ref_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reference_Date: {
			type: DataTypes.DATE,
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
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Adjust_against_allotted: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Emd_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Emd_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_to_be_Debited: {
			type: "MONEY",
			allowNull: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Add_Back_revalidation'
	});
};
