/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample_Approval_Tracking', {
		Sample_Sent_On: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Approval_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Request_Id: {
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
		Shipment_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Sample_Approval_Tracking'
	});
};
