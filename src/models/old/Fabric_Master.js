/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Fabric_Master', {
		Fabric_Id: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		Fabric_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fabric_Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Specification: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Available_Color: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Vendor: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Average_Procurement_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Notes: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Fabric_Master'
	});
};
