/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DEPB_Scheme', {
		DEPB_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		DEPB_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DEPB_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DEPB_Rate_Serial: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DEPB_Sec_Regn_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DEPB_Product_Group: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DEPB_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		depb_rate_per_piece: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'DEPB_Scheme'
	});
};
