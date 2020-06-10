/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Initial_Costing_Notes', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Notes_Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Note_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notes: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Critical_or_NonCritical: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Initial_Costing_Notes'
	});
};
