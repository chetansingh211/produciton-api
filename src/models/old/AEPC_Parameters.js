/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AEPC_Parameters', {
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Current_Year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Cess_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		AEPC_Dollar_Exchange_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'AEPC_Parameters'
	});
};
