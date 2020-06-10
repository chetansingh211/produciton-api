/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Show_alert_detail', {
		Sequence_No: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Alert_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Node_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Process_Set_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		S_No: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Serial_No: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Login_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		To_User: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Sub_Process_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Actual_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Alert_Topic: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Alert_Message: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Priority: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Show_alert_detail'
	});
};
