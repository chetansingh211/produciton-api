/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Courier_Freight_Forwarder', {
		Agent_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Name_of_organization: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Our_Account: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Contact_FName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Contact_MName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Contact_LName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		pager: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING,
			allowNull: true
		},
		License_Number: {
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
			type: DataTypes.CHAR,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Pin_Code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Courier_Freight_Forwarder'
	});
};
