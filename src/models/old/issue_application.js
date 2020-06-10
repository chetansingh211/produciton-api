/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('issue_application', {
		issue_application_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		issue_application_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'issue_application'
	});
};
