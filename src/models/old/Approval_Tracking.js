/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Approval_Tracking', {
		Sample_Sent_On: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Action_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Approval_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sample_Received: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Mode_of_receiving_approval: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Courier_Reference_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AWB_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AWB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Approval_Tracking'
	});
};
