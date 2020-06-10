/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Customs_Exchange_Master', {
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
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Customs_Rate_Import: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		}
	}, {
		tableName: 'Customs_Exchange_Master'
	});
};
