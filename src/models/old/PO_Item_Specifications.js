/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PO_Item_Specifications', {
		Specification_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Id: {
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
		Verification_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Descripency: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Accepted_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Inspection_Challan: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'PO_Item_Specifications'
	});
};
