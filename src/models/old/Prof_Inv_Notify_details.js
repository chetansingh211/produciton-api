/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prof_Inv_Notify_details', {
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Pro_Inv_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Consignee_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Consignee_Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Consignee_Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Consignee_City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Consignee_State: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Consignee_Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Consignee_PinCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty1_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty1_Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty1_Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty1_City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty1_State: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		NotifyParty1_Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty1_PinCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty2_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty2_Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty2_Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty2_City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty2_State: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		NotifyParty2_Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NotifyParty2_PinCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_Pin_Code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Prof_Inv_Notify_details'
	});
};
