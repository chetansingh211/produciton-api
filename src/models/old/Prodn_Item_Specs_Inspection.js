/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_Item_Specs_Inspection', {
		System_Key: {
			type: DataTypes.INTEGER,
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
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Specification_Type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		challan_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size_Id: {
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
		},
		Checked_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_Item_Specs_Inspection'
	});
};
