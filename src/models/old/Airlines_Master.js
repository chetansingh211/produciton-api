/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Airlines_Master', {
		Airline_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Airline_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AWB_Code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Airlines_Master'
	});
};
