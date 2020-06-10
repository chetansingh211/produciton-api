/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample_Ship_Tracking', {
		Shipment_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Name_of_Airlines: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Vessel_Flight_Number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Invoice_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Shipment_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		AWB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Courier_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Shipped_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Shipment_Schedule: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Courier_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ref_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AWB_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_Quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Request_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Invoce_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Sample_Ship_Tracking'
	});
};
