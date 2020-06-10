/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FCFS_Details', {
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Exporters_Reference: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Application_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_style_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'FCFS_Details'
	});
};
