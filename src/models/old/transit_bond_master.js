/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('transit_bond_master', {
		transit_bond_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		transit_bond_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		bond_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		expiry_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		port: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'transit_bond_master'
	});
};
