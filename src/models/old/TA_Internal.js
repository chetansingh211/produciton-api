/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TA_Internal', {
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
		Action_Name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sequence_Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
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
			allowNull: false
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Prepared_Dare: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'TA_Internal'
	});
};
