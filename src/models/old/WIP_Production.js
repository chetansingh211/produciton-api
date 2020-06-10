/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('WIP_Production', {
		Process_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Part_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Total_Issues: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Receipts: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Returns: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total_Rejections: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Location_ID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Opening_Balance_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Opening_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Closing_Balance_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Closing_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Item_or_Part: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'WIP_Production'
	});
};
