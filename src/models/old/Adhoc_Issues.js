/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adhoc_issues', {
		adhoc_issue_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adhoc_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		production_order_id: {
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
		adhoc_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		adhoc_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cat_no: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		challan_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		challan_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		is_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		batch_no: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'adhoc_issues'
	});
};
