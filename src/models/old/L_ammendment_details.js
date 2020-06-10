/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('L_ammendment_details', {
		L_application_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		L_ammendment_no: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		L_ammendment_sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Proforma_Invoice_Details_Sno: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		proforma_invoice_ref_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		colour: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		unit_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		quantity_in_unit_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		unit_of_measurement: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'L_ammendment_details'
	});
};
