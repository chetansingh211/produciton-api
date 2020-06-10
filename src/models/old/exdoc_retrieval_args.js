/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('exdoc_retrieval_args', {
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'exdoc_retrieval_args'
	});
};
