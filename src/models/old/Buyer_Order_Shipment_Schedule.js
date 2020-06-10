/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_order_shipment_schedule', {
		buyer_order_shipment_schedule_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		buyer_order_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		size_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		color_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		scheduled_dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		pincode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mode_of_shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		preferred_courier: {
			type: DataTypes.STRING,
			allowNull: true
		},
		shipped_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		shipment_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		shipment_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		extended_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'buyer_order_shipment_schedule'
	});
};
