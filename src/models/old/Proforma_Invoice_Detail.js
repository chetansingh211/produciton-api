/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Proforma_Invoice_Detail', {
		Shipment_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Prof_Inv_Serial: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Pro_Inv_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Proforma_Invoice_Master',
				key: 'Pro_Inv_No'
			}
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Proforma_Invoice_Master',
				key: 'Pro_Inv_No'
			}
		},
		Amount: {
			type: "MONEY",
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Fabric_Code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Color_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Units_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		quota_category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		segment_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_style_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		exporters_reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Harmonized_Code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Proforma_Invoice_Detail'
	});
};
