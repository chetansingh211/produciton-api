/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Invoice_Master', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Company_Master',
				key: 'Company_code'
			}
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Order_Number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Buyer_consignee_Differ: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		LC_Reference_Number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Based_on_BO_or_PL: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Packing_Order_based: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Mediator_Buyer: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Unit: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Nature_of_payment: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Is_Free_Invoice: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Invoice_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		FCR_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Exchange_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Exchange_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		realized_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Description_Goods: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Description_of_Goods: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Spl_instructions: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Invoice_Declaration: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		lc_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		DEPB_Number: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'depb_schemeL4LG1106000',
				key: 'depb_ref_no'
			}
		},
		Adv_License_No: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'AL_Master',
				key: 'Adv_License_No'
			}
		},
		Agent_Code: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'Courier_Freight_Forwarder',
				key: 'Agent_Code'
			}
		},
		Cess_Number: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'Cess_Master',
				key: 'Cess_Number'
			}
		},
		Agency_Code: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'AEPC_Other_regulatory_Details',
				key: 'Agency_Code'
			}
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Order_Ref: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exporters_Reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Other_references: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ctry_origin_goods: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ctry_destination_goods: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Delivery_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Payment_Terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Pre_carriage_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Receipt_Precarriage_at: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Vessel_flight_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Port_of_loading: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Port_of_discharge: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Final_destination: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GRI_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Mode_of_Shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Invoice_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Nature_of_Contract: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Marks_and_nos: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State_of_Origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Kind_of_Packages: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Invoice_Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AL_Desc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FCR_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Pre_Neg_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bank_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Our_Bank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PList_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Works: {
			type: DataTypes.STRING,
			allowNull: true
		},
		WareHouse_Collection_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Federated_ID_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Duty_Para_Rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Tariff_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Period_of_payment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		invoice_based_on_buyer_order: {
			type: DataTypes.STRING,
			allowNull: true
		},
		invoice_contract_to_place: {
			type: DataTypes.STRING,
			allowNull: true
		},
		shipment_nature: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Current_Year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		production_order_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		oc_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		origin_criterion: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Invoice_Master'
	});
};
