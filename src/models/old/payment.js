/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('payment', {
		payment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		L_application_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bank_Code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dd_no_or_tt_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dd_or_tt_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: false
		},
		eefc_or_non_eefc: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'payment'
	});
};
