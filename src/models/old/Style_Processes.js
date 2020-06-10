/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Style_Processes', {
		process_sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cost_involved: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_of_cost: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Time_Required: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Marginable_Yes_No: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Style_Processes'
	});
};
