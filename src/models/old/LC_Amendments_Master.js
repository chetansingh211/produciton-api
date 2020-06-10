/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Amendments_Master', {
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Amendment_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Flag_transfer_or_amendment: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Original_or_Amended: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Reference_Number: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		LC_Extended_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LC_amended_amount: {
			type: "MONEY",
			allowNull: true
		},
		Minus_Amt: {
			type: "MONEY",
			allowNull: true
		},
		Plus_Amt: {
			type: "MONEY",
			allowNull: true
		},
		Prev_LC_Amt: {
			type: "MONEY",
			allowNull: true
		},
		Is_Transfer_Inter_Company: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Transter_New_Company_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfer_New_LC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfer_New_LC_Reference_Numb: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Amendment_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		shipment_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'LC_Amendments_Master'
	});
};
