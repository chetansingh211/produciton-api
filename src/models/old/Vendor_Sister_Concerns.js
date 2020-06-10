/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vendor_sister_concerns', {
		Sister_Concern_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sister_Concern_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CFName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CMName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CLName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		E_Mail: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'Vendor_Sister_Concerns'
	});
};
