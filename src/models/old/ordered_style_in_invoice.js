/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ordered_style_in_invoice', {
		company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		style_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		buyer_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false
		}
	}, {
		tableName: 'ordered_style_in_invoice'
	});
};
