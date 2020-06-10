/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_contacts', {
		buyer_contact_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cshortname: {
			type: DataTypes.STRING,
			allowNull: false
			
		},
		department_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		cfname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cmname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		clname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		designation: {
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
		beeper: {
			type: DataTypes.STRING,
			allowNull: true
		},
		principal_contact: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'buyer_contacts'
	});
};
