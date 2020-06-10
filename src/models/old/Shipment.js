/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Shipment', {
		shipment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		shipment_ref_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vendor_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		awb_or_bill_of_lading_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		awb_or_bill_of_lading_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		hawb: {
			type: DataTypes.STRING,
			allowNull: true
		},
		hawb_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		flight_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		flight_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		airlines: {
			type: DataTypes.STRING,
			allowNull: true
		},
		forwarder: {
			type: DataTypes.STRING,
			allowNull: true
		},
		shipment_advice_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		shipment_advice_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		custom_house_agent: {
			type: DataTypes.STRING,
			allowNull: true
		},
		insurance_claim_settling_agent: {
			type: DataTypes.STRING,
			allowNull: true
		},
		insurance_policy_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		frieght_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		insurance_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cif_in_inr: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		store_receipt_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_of_documents_to_agent: {
			type: DataTypes.DATE,
			allowNull: true
		},
		mode_of_shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bank_release_order_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		examination_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DO_receipt_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DO_sent_to_agent_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ETA_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ETD_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vessel_landing_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_of_initial_warehousing: {
			type: DataTypes.DATE,
			allowNull: true
		},
		period_of_warehousing: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shipment_thru_eou_or_non_eou: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		reexport_yes_or_no: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		eou_bond_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		eou_bond_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Shipment'
	});
};
