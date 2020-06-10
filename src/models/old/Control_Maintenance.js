/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Control_Maintenance', {
		Column_Name_used: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Help_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Help_Descripton: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Control_Maintenance'
	});
};
