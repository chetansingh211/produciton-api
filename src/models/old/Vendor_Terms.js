/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vendor_terms', {
		Terms_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Terms_Desc: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		freezeTableName: true,
		timestamps: false
	},
	{
		tableName: 'vendor_terms'
	});
};
