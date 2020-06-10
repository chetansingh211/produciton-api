/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PCL_Master', {
		PCL_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PCL_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		PCL_Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'PCL_Master'
	});
};
