/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BO_Description', {
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		BO_Description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'BO_Description'
	});
};
