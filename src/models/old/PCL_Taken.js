/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PCL_Taken', {
		PCL_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PLC_Taken_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'PCL_Taken'
	});
};
