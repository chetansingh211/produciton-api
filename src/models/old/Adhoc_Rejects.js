/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adhoc_rejects', {
		adhoc_reject_id:{
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		company_code_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		adhoc_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		adhoc_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		related_adhoc_receipt_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rejected_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		rejected_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		reason_for_rejection: {
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
		tableName: 'adhoc_rejects'
	});
};
