/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Annexure', {
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		auto_increment: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Endorsement_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Endorsement_Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity_to_Certify: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FOB_per_Piece: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Endorsed_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Adv_License_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Endorsed: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Endorsement_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fiber: {
			type: DataTypes.STRING,
			allowNull: true
		},
		made_for: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Endorsed_QC_UOM: {
			type: DataTypes.STRING,
			allowNull: true
		},
		style_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quota_Annexure_From_Reval: {
			type: DataTypes.STRING,
			allowNull: true
		},
		revalidation_yes_no: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Annexure'
	});
};
