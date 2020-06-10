/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prints_Master', {
		Prints_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Prints_Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Prints_Master'
	});
};
