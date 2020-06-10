/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Conversion_Factors', {
		Original_Unit: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		New_Unit: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Conversion_Factor: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		Conversion_Type: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'Conversion_Factors'
	});
};
