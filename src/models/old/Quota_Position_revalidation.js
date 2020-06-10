/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Position_revalidation', {
		category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		quota_system: {
			type: DataTypes.STRING,
			allowNull: true
		},
		quota_certificate_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lapsed_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		endorsed_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		add_back_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		applied_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Position_revalidation'
	});
};
