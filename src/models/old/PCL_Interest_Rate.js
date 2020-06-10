/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PCL_Interest_Rate', {
		Rate_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'PCL_Interest_Rate'
	});
};
