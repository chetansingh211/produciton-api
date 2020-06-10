/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lists', {
		list_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement : true
		},
		key_value: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		freezeTableName: true,
		timestamps: false
	  },
	{
		tableName: 'lists'
	});
};
