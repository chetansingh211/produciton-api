/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_tags', {
		buyer_tag_id : {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		department_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		tag_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tag_desc: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'buyer_tags'
	});
};
