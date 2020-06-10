/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Process_Issue_Ordered_lnk', {
		Process_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Ordered_Item_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Process_Issue_Ordered_lnk'
	});
};
