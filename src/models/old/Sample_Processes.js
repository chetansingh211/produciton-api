/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample_Processes', {
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Color_Id: {
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
		Units_to_Process: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Process: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Cost_Involved: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Cost: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Time_Required: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_of_time: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Marginable: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Start_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		End_Date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Sample_Processes'
	});
};
