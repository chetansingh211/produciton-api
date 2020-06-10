/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Stock_Transfer_Challan', {
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Transaction_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfer_Form: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfer_To: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Chalan_Rct_Genratd_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Chalan_Rct_Authrzd_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Receipt_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Receipt_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Reason_For_Transfer: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Will_Return_Back: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Int_Ext_Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Item_or_Style: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Stock_Transfer_Challan'
	});
};
