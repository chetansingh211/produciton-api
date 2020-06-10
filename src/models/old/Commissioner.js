/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Commissioner', {
		commissioner_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		designation: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		pin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		telephone: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Commissioner'
	});
};
