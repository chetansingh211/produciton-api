/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style', {
	  style_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		style_code:{
			type: DataTypes.STRING,
			allowNull: false
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		country_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		fabric_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		season_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		pattern_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		style_flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		garment_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'style'
	});
};
