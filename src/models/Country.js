/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Country', {
		Country_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EU_Country: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		NR_Country: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'Country'
	});
};
