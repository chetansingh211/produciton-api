/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AEPC_Currency_Rate', {
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Current_Year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		USD_Conversion_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'AEPC_Currency_Rate'
	});
};
