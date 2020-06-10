/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Received_Bales', {
		Bale_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Challan_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PO_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bale_Reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		No_of_Thans: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Bale_Total_Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Unit_Of_Measurement_3_: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Received_Bales'
	});
};
