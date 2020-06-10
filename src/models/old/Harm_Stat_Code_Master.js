/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Harm_Stat_Code_Master', {
		Harmonised_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Garment_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Harm_Stat_Code_Master'
	});
};
