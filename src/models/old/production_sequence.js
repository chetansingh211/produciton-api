/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('production_sequence', {
		production_sequence_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		production_sequence_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		sequence_no: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'production_sequence'
	});
};
