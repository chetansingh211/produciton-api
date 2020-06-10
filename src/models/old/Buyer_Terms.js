/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_terms', {
		buyer_terms_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		term_desc: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'buyer_terms'
	});
};
