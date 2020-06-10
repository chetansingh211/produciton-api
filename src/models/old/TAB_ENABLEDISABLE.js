/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TAB_ENABLEDISABLE', {
		Keytag: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'TAB_ENABLEDISABLE'
	});
};
