/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Reexport_bom', {
		Reexport_item_no: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true
		},
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
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		unit_of_measurement: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'Reexport_bom'
	});
};
