/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Payment_Terms', {
		Payment_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Payment_Terms'
	});
};
