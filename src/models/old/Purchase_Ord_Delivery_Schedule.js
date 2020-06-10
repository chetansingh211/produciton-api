/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('purchase_ord_delivery_schedule', {
        schedule_id: {
            type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        purchase_order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vendor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        delivery_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        shipment_mode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        quantity: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        State: {
            type: DataTypes.STRING,
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: true
        },
        start_dt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        end_dt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true
        },
        delivery_location: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
		freezeTableName: true,
		timestamps: false
	},{
        tableName: 'purchase_ord_delivery_schedule'
       });
};