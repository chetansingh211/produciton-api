/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Additional_Allocation', {
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sl_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_Allotment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Additional_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Reason: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Additional_Allocation'
	});
};
