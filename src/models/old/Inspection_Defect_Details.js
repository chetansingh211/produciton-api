/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Inspection_Defect_Details', {
		po_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		challan_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		serial_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		item_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		defect_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		disputed_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		perc_of_defects: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Inspection_Defect_Details'
	});
};
