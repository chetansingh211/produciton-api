/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goods_receipt', {
		good_receipt_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		
		receipt_category: {
			type: DataTypes.STRING,
			allowNull: false
		},
		challan_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		challan_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		challan_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vendor_bill_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		vendor_bill_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vendor_challan_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_challan_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		received_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		received_at: {
			type: DataTypes.STRING,
			allowNull: true
		},
		advance_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		bank_guarantee: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		retention_money: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		goods_service_tax: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		goods_service_tax: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		freight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		insurance: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		customs: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		airport_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},	
		clearance_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		
		miscellaneous_charges: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		
		payment_terms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		related_challan_number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'goods_receipt'
	});
};
