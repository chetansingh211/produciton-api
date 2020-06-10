/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Invoice_Reexport', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Reexport_item_no: {
			type: DataTypes.DECIMAL,
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
		tableName: 'Invoice_Reexport'
	});
};
