/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('node', {
		Node_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Node_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Node_Desc: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'node'
	});
};
