/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Vendor_manpower_details', {
		Manpower_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Number: {
			type: DataTypes.REAL,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'Vendor_manpower_details'
	});
};
