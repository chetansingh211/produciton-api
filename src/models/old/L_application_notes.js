/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('L_application_notes', {
		L_application_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		L_notes_sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		condition: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'L_application_notes'
	});
};
