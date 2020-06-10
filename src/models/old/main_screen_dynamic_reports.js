/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('main_screen_dynamic_reports', {
		report_name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		report_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		last_updated_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		report_sql: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		report_sql1: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		report_sql2: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		argument1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		report_sql3: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		argumant2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		argument3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		argument4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		arg1type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		arg2type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		arg3type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		arg4type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		sql_desc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		related_sql: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		report_for: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'main_screen_dynamic_reports'
	});
};
