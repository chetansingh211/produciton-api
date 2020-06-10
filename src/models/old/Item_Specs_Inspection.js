/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Item_Specs_Inspection', {
		Specification_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Specified_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Received_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Verified: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Verified_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Dt_of_Verification: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Descripency: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Accepted_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Item_Specs_Inspection'
	});
};
