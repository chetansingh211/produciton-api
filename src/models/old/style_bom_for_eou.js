/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_bom_for_eou', {
		Buyer_Style: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		eou_item_ref_no: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		unit_of_measurement: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'style_bom_for_eou'
	});
};
