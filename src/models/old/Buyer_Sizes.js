/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_sizes', {
		buyer_size_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		buyer_id:{
			type: DataTypes.INTEGER,
			allowNull: false
		},
		garment_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		size_description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'buyer_sizes'
	});
};
