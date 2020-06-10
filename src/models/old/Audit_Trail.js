/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Audit_Trail', {
		User_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Audit_Trail'
	});
};
