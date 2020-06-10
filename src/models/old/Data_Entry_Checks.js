/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Data_Entry_Checks', {
		check_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		enable: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Data_Entry_Checks'
	});
};
