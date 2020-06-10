/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RejChallnDetails', {
		Challan_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Rejection_Challan: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity_Rejected: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reason_for_Rejection: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_of_Measurement_11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate_Received: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_of_Rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Debit_Note_No: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'RejChallnDetails'
	});
};
