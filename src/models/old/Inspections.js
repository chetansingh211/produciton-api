/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Inspections', {
		Inspection_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Inspected_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Inspection_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Inspected_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Inspection_Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Inspections'
	});
};
