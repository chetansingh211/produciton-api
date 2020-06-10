/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AL_Revalidation', {
		Adv_License_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Revalidation_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.REAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Amount: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		},
		BG_Debited: {
			type: "MONEY",
			allowNull: true,
			defaultValue: '((0.00))'
		}
	}, {
		tableName: 'AL_Revalidation'
	});
};
