/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PARTY_PROCESS_RATES', {
		BUYER_ORDER: {
			type: DataTypes.STRING,
			allowNull: false
		},
		STYLE_NO: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PARTY_CODE: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PROCESS_ID: {
			type: DataTypes.STRING,
			allowNull: false
		},
		RATE: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'PARTY_PROCESS_RATES'
	});
};
