/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BG_Parameters', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		BG_Limit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		BG_Utilized: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'BG_Parameters'
	});
};
