/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_parts', {
		style_part_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		part_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'style_parts'
	});
};
