/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employee', {
		name: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		age: {
			type: DataTypes.DOUBLE,
			allowNull: false
		},
		designation: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'employee'
	});
};
