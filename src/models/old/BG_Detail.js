/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BG_Detail', {
		BG_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		FDR_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Amount_Utilized: {
			type: "MONEY",
			allowNull: true
		},
		checked: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'BG_Detail'
	});
};
