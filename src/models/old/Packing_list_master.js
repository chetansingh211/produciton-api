/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Packing_list_master', {
		PList_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		packing_list_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		PList_Format: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		plist_desc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		attach_invoice_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		commercial_summary: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Packing_list_master'
	});
};
