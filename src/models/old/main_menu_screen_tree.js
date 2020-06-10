/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('main_menu_screen_tree', {
		menu_item_desc: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		menu_level: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		parent_menu_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		script: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		more_levels: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		dwo_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		window_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'main_menu_screen_tree'
	});
};
