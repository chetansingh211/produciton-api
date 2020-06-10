/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Dutydraw_Back', {
		DBK_Schedule_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DBK_Rate_per_piece: {
			type: "MONEY",
			allowNull: true
		},
		DBK_percent: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBK_Rate_per_kgs: {
			type: "MONEY",
			allowNull: true
		}
	}, {
		tableName: 'Dutydraw_Back'
	});
};
