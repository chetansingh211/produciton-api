/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_license_item_master', {
		adv_license_item_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		our_name_of_item: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'adv_license_item_master'
	});
};
