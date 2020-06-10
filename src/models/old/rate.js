/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rate', {
		item_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'rate'
	});
};
