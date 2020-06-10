/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('l_ammendment_table_action', {
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
		name_of_field: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		type_of_action: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'l_ammendment_table_action'
	});
};
