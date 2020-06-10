/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_bom_master', {
		Buyer_Style: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'style_bom_master'
	});
};
