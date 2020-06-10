/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('System_Configuration', {
		Name_Of_Company: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Location: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Stock_Valuation_Method: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Operation_Base_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'System_Configuration'
	});
};
