/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sets', {
		Set_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		No_of_sets: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Sets'
	});
};
