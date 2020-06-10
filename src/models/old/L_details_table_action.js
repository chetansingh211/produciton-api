/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('L_details_table_action', {
		name_of_field: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		L_application_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		L_ammendment_no: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		L_ammendment_sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		type_of_action: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'L_details_table_action'
	});
};
