/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Initial_costing_details', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Yarn: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Material: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Tube_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		GSM: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Fabric: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Machine: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Gauge: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Initial_costing_details'
	});
};
