/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bond_Master', {
		bond_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		bond_date: {
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
		}
	}, {
		tableName: 'Bond_Master'
	});
};
