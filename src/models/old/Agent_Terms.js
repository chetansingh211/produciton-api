/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Agent_Terms', {
		Terms_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Agent_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Terms_Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Agent_Terms'
	});
};
