/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Endorsement_Revalidation', {
		auto_increment: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Application_Ref_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Endorsed_Category: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Endorsement_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adult_to_Child: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Token_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Allocation_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Allocation_Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Proof_of_Shipment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity_Shipped: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		short_shipped_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		shipment_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		EMD_to_be_Credited: {
			type: "MONEY",
			allowNull: true
		},
		Token_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Proof_of_Shipment: {
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
		reval_qc_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Converted_endores_qty_in_pcs: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Conv_Sh_Qty_in_pcs: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Endorsement_Revalidation'
	});
};
