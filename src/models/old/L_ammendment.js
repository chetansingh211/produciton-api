/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('L_ammendment', {
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
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mode_of_shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		l_ammendment_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_date_of_shipment: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_of_expiry: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vendor_bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lc_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		license_no_or_system: {
			type: DataTypes.STRING,
			allowNull: true
		},
		port_of_discharge: {
			type: DataTypes.STRING,
			allowNull: true
		},
		port_of_shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tenor_date: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country_of_origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		transshipment_allowed: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		partial_shipment_allowed: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		bill_of_lading_awb_instruction: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		nature_of_contract: {
			type: DataTypes.STRING,
			allowNull: false
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'L_ammendment'
	});
};
