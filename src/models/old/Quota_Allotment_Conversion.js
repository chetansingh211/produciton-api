/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Allotment_Conversion', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		From_Conversion: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		To_Conversion: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Factor: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Allotment_Conversion'
	});
};
