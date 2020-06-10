/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('process_order', {
		process_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		process_order_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		order_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		sub_process: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		order_dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		issued_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		authorised_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		authorised_dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		process_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_value: {
			type: DataTypes.STRING,
			allowNull: true
		},
		despatch_mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cancel_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		start_delivery_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end_delivery_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		others_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		adhoc_flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		freezeTableName: true,
		timestamps: false
	},{
		tableName: 'process_order'
	});
};
