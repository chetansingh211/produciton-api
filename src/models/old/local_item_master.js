/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('local_item_master', {
		local_item_ref_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		local_item_name: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'local_item_master'
	});
};
