/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample_RM_Req', {
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Request_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Required_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Allocated_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Sample_RM_Req'
	});
};
