/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('GSP_Invoice', {
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		GSP_Ref_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
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
		Invoice_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Kind_of_Packages: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Marks_and_nos: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Description_of_Goods: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Gross_Weight: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Origin_Criterion: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'GSP_Invoice'
	});
};
