/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bond_details', {
		shipment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		bond_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		transit_bond_no: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Bond_details'
	});
};
