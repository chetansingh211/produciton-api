/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('process_into', {
		process_id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'process_into'
	});
};
