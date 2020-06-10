/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Design_Master', {
		Design_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Design_Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Design_Master'
	});
};
