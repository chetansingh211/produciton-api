/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('work_process', {
		process_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		process_description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		process_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		},
	{
		freezeTableName: true,
		timestamps: false
	  },
	   {
		tableName: 'WorkProcess'
	});
};
