/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('purchase_ord_item_spec', {
        specification_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        purchase_order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        specified_value: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        received_value: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        verified: {
            type: DataTypes.CHAR,
            allowNull: true
        },
        verified_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        verification_dt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        descripency: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: true
        },
        accepted_quantity: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        desciption: {
            type: DataTypes.STRING,
            allowNull: true
        },
        inspection_challan: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
		freezeTableName: true,
		timestamps: false
	},{
        tableName: 'purchase_ord_item_spec'
       });
};