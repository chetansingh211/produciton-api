/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Exchange_Master', {
		Exchange_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Customs_Rate_Export: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Customs_Rate_Import: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Exchange_Master'
	});
};
