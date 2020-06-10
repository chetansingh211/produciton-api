/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Notify', {
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Notify_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Notify_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify_Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify_Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify_City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify_State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify_PinCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify_Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Notify_Mode_of_shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		notifyparty1_attention: {
			type: DataTypes.STRING,
			allowNull: true
		},
		notifyparty1_attention_tel: {
			type: DataTypes.STRING,
			allowNull: true
		},
		notifyparty2_attention: {
			type: DataTypes.STRING,
			allowNull: true
		},
		notifyparty2_attention_tel: {
			type: DataTypes.STRING,
			allowNull: true
		},
		notify_coast: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'LC_Notify'
	});
};
