/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Material_coding', {
		ITEM_DESCRIPTION: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CODE: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		TYPE: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Material_coding'
	});
};
