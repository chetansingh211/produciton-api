/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fab', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Process_Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		chetan: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'fab'
	});
};
