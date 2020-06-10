/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bills_Received', {
		Bill_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Bills_Received'
	});
};
