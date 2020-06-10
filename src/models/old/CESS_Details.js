/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CESS_Details', {
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Cess_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Cess_Amount: {
			type: "MONEY",
			allowNull: true
		}
	}, {
		tableName: 'CESS_Details'
	});
};
