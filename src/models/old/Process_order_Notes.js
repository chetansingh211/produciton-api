/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_order_Notes', {
		Process_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Note_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Note_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Note_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Note: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Topic: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Process_order_Notes'
	});
};
