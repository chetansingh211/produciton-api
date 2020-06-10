/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoice_AL', {
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adv_License_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Unit_of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Weight: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'invoice_AL'
	});
};
