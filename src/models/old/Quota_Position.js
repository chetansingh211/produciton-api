/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Position', {
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
		transferred_quantity: {
			type: DataTypes.DECIMAL,
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
		surrendered_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		applied_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		revalidated_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Position'
	});
};
