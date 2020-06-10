/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Port_of_loading_bank', {
		bank_id: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		port_of_loading: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		EDP_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IT_Number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Port_of_loading_bank'
	});
};
