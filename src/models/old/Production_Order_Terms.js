/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Production_Order_Terms', {
		Term_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Production_Order_Terms'
	});
};
