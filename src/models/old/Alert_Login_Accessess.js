/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Alert_Login_Accessess', {
		S_No: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Serial_No: {
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
		Login_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Process_Set_Id: {
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
		}
	}, {
		tableName: 'Alert_Login_Accessess'
	});
};
