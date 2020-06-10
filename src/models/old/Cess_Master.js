/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Cess_Master', {
		Cess_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Cess_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cheque_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cheque_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Total_Cess_Amount: {
			type: "MONEY",
			allowNull: true
		},
		Extra_amount: {
			type: "MONEY",
			allowNull: true
		},
		Cheque_Amount: {
			type: "MONEY",
			allowNull: true
		}
	}, {
		tableName: 'Cess_Master'
	});
};
