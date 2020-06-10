/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('coding', {
		FABRIC: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CODE: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'coding'
	});
};
