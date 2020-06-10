/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_colour_size_bom', {
		style_colour_size_bom_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
			
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		size_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		color_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
			
		},
		process_sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		consumption: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		wastage_factor: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		item_width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		measurement_unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		unit_cost: {
			type: DataTypes.STRING,
			allowNull: true
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'style_colour_size_bom'
	});
};
