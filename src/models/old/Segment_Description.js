/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Segment_Description', {
		Sno: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		Segment_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Harmonized_Code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Segment_Description'
	});
};
