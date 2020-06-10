/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dynamic_report_sum', {
		dataobject: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		report_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		column_name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		tag: {
			type: DataTypes.STRING,
			allowNull: true
		},
		detail: {
			type: DataTypes.STRING,
			allowNull: true
		},
		summary: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group13: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group14: {
			type: DataTypes.STRING,
			allowNull: true
		},
		group15: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer13: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer14: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trailer15: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'dynamic_report_sum'
	});
};
