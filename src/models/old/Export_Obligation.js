/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Export_Obligation', {
		Product_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adv_License_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'AL_Master',
				key: 'Adv_License_No'
			}
		},
		Obligation_PCS: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Value_in_FC: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Value_in_INR: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		}
	}, {
		tableName: 'Export_Obligation'
	});
};
