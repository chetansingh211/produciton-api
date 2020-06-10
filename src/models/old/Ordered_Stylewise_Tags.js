/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Ordered_Stylewise_Tags', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Department_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Tag_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		tag_description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Ordered_Stylewise_Tags'
	});
};
