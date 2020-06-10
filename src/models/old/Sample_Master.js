/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample_Master', {
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sample_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Fabric: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Style_Group: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Theme: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Costing_Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Design: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Pattern_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sketch: {
			type: DataTypes.STRING,
			allowNull: true
		},
		sequence_id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Sample_Master'
	});
};
