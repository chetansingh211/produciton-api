/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Amendement_Charges', {
		Application_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		cheque_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cheque_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		bank: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Amendement_Charges'
	});
};
