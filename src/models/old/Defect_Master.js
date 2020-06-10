/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Defect_Master', {
		Defect_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Col_Var_From: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Col_Var_To: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Defect_Master'
	});
};
