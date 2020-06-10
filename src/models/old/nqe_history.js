/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nqe_history', {
		category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		endorsement_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		endorsement_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country: {
			type: DataTypes.STRING,
			allowNull: false
		},
		invoice_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		sb_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		sb_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		fob_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'nqe_history'
	});
};
