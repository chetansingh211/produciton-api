/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('can_order', {
		order_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status_changed_dt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'can_order'
	});
};
