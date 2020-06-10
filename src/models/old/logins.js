/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('logins', {
		Node_Id: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Login_Id: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		User_Id: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Login_Type: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Passwd: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Con_Access: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Login_Exp_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Passwd_Exp_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Passwd_Never_Expires: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Login_Never_Expires: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Can_Work_From_Time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Can_Work_Upto_Time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Can_Work_Any_Time: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Creation_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Created_By: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Reason: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'logins'
	});
};
