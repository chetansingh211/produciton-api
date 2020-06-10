/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoice_commercial_annexure', {
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		annexure: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'invoice_commercial_annexure'
	});
};
