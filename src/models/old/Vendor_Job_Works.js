/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vendor_job_works', {
		vendor_job_works_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		capacity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_Capacity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		elad_time: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		lead_time_unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		last_updated: {
			type: DataTypes.DATE,
			allowNull: true
		},
		last_updated_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		last_supplied_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		last_supplied_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'vendor_job_works'
	});
};
