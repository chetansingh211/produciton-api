/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('local_issues', {
		issue_application_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		issue_application_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'local_issues'
	});
};
