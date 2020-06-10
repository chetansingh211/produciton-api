/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vendor_bankers', {
		vendor_bank_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		vendor_account: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_account: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mode_of_trxn: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bank_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		contact_name:{
			type: DataTypes.STRING,
			allowNull: true
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		e_mail: {
			type: DataTypes.STRING,
			allowNull: true
		},
		swift_account: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		freezeTableName: true,
		timestamps: false
	},
	{
		tableName: 'vendor_bankers'
	});
};
