/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Interest_Area', {
		Department_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Area_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Interest_Area'
	});
};
