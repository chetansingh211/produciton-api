/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prod_Order_Instructions', {
		Instruction_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Prod_Order_Instructions'
	});
};
