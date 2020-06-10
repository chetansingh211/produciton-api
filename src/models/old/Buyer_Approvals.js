/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_approvals', {
		buyer_approval_id : {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		buyer_Id: {
			type: DataTypes.INTEGER,
			allowNull: false
			
		},
		action_name: {
			type: DataTypes.STRING,
			allowNull: true
			
		},
		approval_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_of_qty: {
			type: DataTypes.STRING,
			allowNull: true
		},
		shipment_mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		notify: {
			type: DataTypes.STRING,
			allowNull: true
		},
		chargable: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		bill_to: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'buyer_approvals'
	});
};
