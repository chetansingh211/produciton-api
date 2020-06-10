/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PCL_Detail', {
		PCL_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PCL_Detail_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_or_Order: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exchange_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Exchange_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Inr_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'PCL_Detail'
	});
};
