/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Initial_costing', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Base_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Converted_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Local_Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Conv_Rate_to_A: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Conv_Rate_to_B: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Conversion_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		size_sequence: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Costing_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		authorised_flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		authorised_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		authorised_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		authorised_comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Avg_Size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		User_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Season: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Department: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Delivery_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Qty_Required: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amended_No: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Initial_costing'
	});
};
