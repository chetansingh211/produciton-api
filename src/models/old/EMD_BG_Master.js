/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EMD_BG_Master', {
		EMD_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_Type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		EMD_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Validity_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Forefieture_Amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Forefieture_Refund: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Forefieture_Amount_Refund: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Forefieture_Refund_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Dispute_Status: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'EMD_BG_Master'
	});
};
