/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Garment_Cost', {
		Costing_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		CMP: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Trims: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Printing: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Embroidery: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		SP_FC: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBK_Percentage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBK_Limit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Garment_Cost'
	});
};
