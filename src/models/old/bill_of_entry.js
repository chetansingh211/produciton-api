/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bill_of_entry', {
		shipment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		igm_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		igm_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		boe_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		boe_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		demurrage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		submission_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		total_duty_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'bill_of_entry'
	});
};
