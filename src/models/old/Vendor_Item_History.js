/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vendor_item_history', {
		vendor_item_history_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_updated: {
			type: DataTypes.DATE,
			allowNull: false
		},
		lead_time: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_time: {
			type: DataTypes.STRING,
			allowNull: true
		},
		capacity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_capacity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		basic_rates: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		last_updated_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		reasons: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'vendor_item_history'
	});
};
