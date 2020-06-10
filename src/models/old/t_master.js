/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('t_master', {
		avoid_primary: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sb_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		awb_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		terms_percent: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		freight_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		insurance_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		gross_wt: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		freight_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		insurance_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		quantity_short: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		quantity1: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fcy_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fcy_discounted_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		inr_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fob_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		exchange_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		company_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		contract_nature: {
			type: DataTypes.STRING,
			allowNull: true
		},
		works: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		currency_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		sb_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		awb_no: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 't_master'
	});
};
