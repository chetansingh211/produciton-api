/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Couriers', {
		Courier_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Full_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address_1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address_2: {
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
		},
		Beeper: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Couriers'
	});
};
