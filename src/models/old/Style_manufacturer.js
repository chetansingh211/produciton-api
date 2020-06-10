/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Style_manufacturer', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendors_Style_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Style_manufacturer'
	});
};
