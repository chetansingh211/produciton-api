/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Cutoff_Price_FCFS', {
		Cutoff_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Country_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Category: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Segment: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Cutoff_Price: {
			type: "MONEY",
			allowNull: true
		}
	}, {
		tableName: 'Cutoff_Price_FCFS'
	});
};
