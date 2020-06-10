/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Buyer_Labels', {
		Label_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Department_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Label_description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'Buyer_Labels'
	});
};
