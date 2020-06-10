/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Allotment_Revalidation', {
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
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Category: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Current_Year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Quota_Certificate_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Cetificate_Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity_allotted_in_Pieces: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Allotted_Quantity_Utilized: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Balance_Quantity_in_Pieces: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Net_FOB_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		INR_Rate_per_piece: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FOB_value_in_INR: {
			type: "MONEY",
			allowNull: true
		},
		Cut_Off_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		EMD_to_be_debited: {
			type: "MONEY",
			allowNull: true
		},
		Revalidated_Qunatity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		EMD_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Entitlement_Certificate_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Entitlement_Certificate_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Application_reference_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Revalidated_Qunatity_Utilized: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Revalidated_Qunatity_Balance: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Is_EU_Country: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Council_charges: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		FCFS_Qty_pro_Rata: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		token_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		token_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Allotment_Revalidation'
	});
};
