/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EMD_BG_Details', {
		Entry_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Transaction_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		EMD_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Deposits: {
			type: "MONEY",
			allowNull: true
		},
		Debits: {
			type: "MONEY",
			allowNull: true
		},
		Credits: {
			type: "MONEY",
			allowNull: true
		},
		DD_FDR_Number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'EMD_BG_Details'
	});
};
