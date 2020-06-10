/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('login_accesses', {
		Node_Id: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Login_Id: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Process_Id: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Sub_Process_Id: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'login_accesses'
	});
};
