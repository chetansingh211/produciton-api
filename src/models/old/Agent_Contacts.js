/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Agent_Contacts', {
		Contact_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Agent_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
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
		Designation: {
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
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Zip: {
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
		Email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Beeper: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Agent_Contacts'
	});
};
