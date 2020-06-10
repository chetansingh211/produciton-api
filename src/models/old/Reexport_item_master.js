/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Reexport_item_master', {
		Reexport_item_no: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Reexport_item_description: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'Reexport_item_master'
	});
};
