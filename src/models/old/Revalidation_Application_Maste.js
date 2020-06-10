/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Revalidation_Application_Maste', {
		Application_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Batch_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Token_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Token_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Application_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Subject: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Revalidation_Application_Maste'
	});
};
