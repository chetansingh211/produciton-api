/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_color_sizes', {
		style_color_sizes_id: {
			type: DataTypes.INTEGER				,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		color_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		size_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'style_color_sizes'
	});
};
