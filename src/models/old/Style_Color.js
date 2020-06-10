/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_color', {
		style_color_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true

		},
		color_id: {
			type: DataTypes.INTEGER,
			allowNull: false
			
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'style_color'
	});
};
