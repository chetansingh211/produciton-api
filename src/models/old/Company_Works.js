/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Company_Works', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Works_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Contact_Person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Works_Address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Telephone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Telex: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		EMail: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Company_Works'
	});
};
