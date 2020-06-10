/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Product_Machine_Required', {
		Product_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Machine_ID: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		Company_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Machine_Name: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Total_Machines: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Total_Persons: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Product_Machine_Required'
	});
};
