/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Style_Sample_Link', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'Style_Sample_Link'
	});
};
