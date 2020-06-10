/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('epcg_details', {
		epcg_master_sno: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'epcg_details'
	});
};
