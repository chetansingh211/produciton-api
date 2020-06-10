/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoice_details_for_sp', {
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		style_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		buyer_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		buyer_style_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		total_quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Vendor: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'invoice_details_for_sp'
	});
};
