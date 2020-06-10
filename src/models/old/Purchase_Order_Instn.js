/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Purchase_Order_Instn', {
		Instructions_type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Purchase_Order_Instn'
	});
};
