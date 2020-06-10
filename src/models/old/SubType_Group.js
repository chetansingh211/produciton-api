/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SubType_Group', {
		Item_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_SubType: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'SubType_Group'
	});
};
