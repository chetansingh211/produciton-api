/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('spiegel_invoice', {
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
		destination_port_desc: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		contract_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		customer_po_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_ref_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		season_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		color: {
			type: DataTypes.STRING,
			allowNull: true
		},
		label: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ass_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		account_no: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'spiegel_invoice'
	});
};
