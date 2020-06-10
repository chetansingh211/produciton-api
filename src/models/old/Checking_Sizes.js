/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Checking_Sizes', {
		Checking_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Total_Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Accepted_Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Checking_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Checking_Sizes'
	});
};
