/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TA_Negotiated', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Approval_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Action_Name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Sub_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Planned_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Actual_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Received_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Active_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Expected_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Sequence_Id: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'TA_Negotiated'
	});
};
