/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Agent_Master', {
		Agent_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Organ_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CEO_FName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CEO_MName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CEO_LName: {
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
		Phone1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMail: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Beeper: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Agent_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Principal_contact: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Agent_Master'
	});
};
