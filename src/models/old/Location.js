/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('location', {
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		location_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		contact_name: {
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
		}
	}, {
		tableName: 'Location'
	});
};
