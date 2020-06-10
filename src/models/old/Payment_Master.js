/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Payment_Master', {
		Payment_Advice_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Payment_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Payment_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Payment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Payment_Made_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Advice_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Payment_Master'
	});
};
