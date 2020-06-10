/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Approvals_Required', {
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Approval_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Action_Name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Approval_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Shipment_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bill_To: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Chargeable_or_Free: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Department_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Agent_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CShortName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Link_Process: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Link_Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Approvals_Required'
	});
};
