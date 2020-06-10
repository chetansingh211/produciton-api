/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('style_buyers', {
		style_buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		style_id: {
			type: DataTypes.INTEGER,
			allowNull: false
        }
		},{
			freezeTableName: true,
			timestamps: false
		},{
		tableName: 'style_buyers'
	});
};
