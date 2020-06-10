/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Agent_Interest', {
		Interest_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Agent_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Agent_Interest'
	});
};
