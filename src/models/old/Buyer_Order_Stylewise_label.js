/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_order_stylewise_label', {
		buyer_order_stylewise_label_id: {
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
		label_id: {
			type: DataTypes.INTEGER,
			allowNull: false
			
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		freezeTableName: true,
		timestamps: false
	},{
		tableName: 'buyer_order_stylewise_label'
	});
};
