/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoice_shipping_instructions', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		special_instruction1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		special_instruction2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		packing_list: {
			type: DataTypes.STRING,
			allowNull: true
		},
		customs_declaration: {
			type: DataTypes.STRING,
			allowNull: true
		},
		visa: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TC_sample: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EDI_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IT_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepaid_certificate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		custom_annexure: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Freight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Transport_Documents_Required: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'invoice_shipping_instructions'
	});
};
