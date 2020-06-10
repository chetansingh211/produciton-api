/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Imp_obligation', {
		Adv_License_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Unit_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Import_Value: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		}
	}, {
		tableName: 'Imp_obligation'
	});
};
