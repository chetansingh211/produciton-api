/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('eou_item_master', {
		eou_item_ref_no: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		eou_item_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		imported_or_indiginious: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'eou_item_master'
	});
};
