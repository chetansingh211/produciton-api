/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Stored_Procedures_Lib', {
		Procedure_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Procedure_Desc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Procedure_Syntax: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Stored_Procedures_Lib'
	});
};
