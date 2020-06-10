/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Measurement_Chart', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Measurement_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sequence_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Measurement: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Measurement_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Variation: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Measurement_Char: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Measurement_Chart'
	});
};
