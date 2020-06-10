/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Endorsement_of_NR', {
		NR_App_Ref_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Country_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: true
		},
		End_Token_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		End_Token_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Allocation_Number: {
			type: DataTypes.STRING,
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
		Proof_of_Shipment: {
			type: DataTypes.STRING,
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
		Fibre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Made_for: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Endorsement_of_NR'
	});
};
