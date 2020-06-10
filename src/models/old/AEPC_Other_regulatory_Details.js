/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AEPC_Other_regulatory_Details', {
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
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
		tableName: 'AEPC_Other_regulatory_Details'
	});
};
