/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Divisional_Incharge', {
		incharge_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		First_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Middle_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Last_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Designation: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address: {
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
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		zip: {
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
		telegram: {
			type: DataTypes.STRING,
			allowNull: true
		},
		telex: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Divisional_Incharge'
	});
};
