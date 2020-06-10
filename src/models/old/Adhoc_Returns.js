/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adhoc_returns', {
		adhoc_return_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adhoc_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		adhoc_issue_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		returned_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		returned_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		reason_for_return: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'adhoc_returns'
	});
};
