/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stylelibrary_response', {
		stylelibrary_key: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Comment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Response: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Current_Buyer: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'stylelibrary_response'
	});
};
