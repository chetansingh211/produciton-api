/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Adhoc_bales', {
		Bale_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adhoc_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adhoc_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		No_of_Thans: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bale_reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Adhoc_bales'
	});
};
