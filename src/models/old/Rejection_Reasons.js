/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Rejection_Reasons', {
		Reason_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Rejection_Challan_Number_2: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Process: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Rejection_Reasons'
	});
};
