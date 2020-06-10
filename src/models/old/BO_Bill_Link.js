/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BO_Bill_Link', {
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Order_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Order_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Budgeted_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FOB_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Allocated_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Post_Ship_Exp: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Exchange_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'BO_Bill_Link'
	});
};
