/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Debit_Note', {
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Rejection_Challan_Number_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Debit_note_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Debit_Note'
	});
};
