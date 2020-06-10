/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('advance_license_bom', {
		buyer_style_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		adv_license_item_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_of_measurement: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'advance_license_bom'
	});
};
