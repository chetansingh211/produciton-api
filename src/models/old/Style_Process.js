/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_process', {
		style_process_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
			
		},
		order_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		process_sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		process_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'style_process'
	});
};
