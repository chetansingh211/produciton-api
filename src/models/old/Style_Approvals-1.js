/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Style_Approvals-1', {
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Action_Name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sequence_Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Sub_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity_Required: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Style_Approvals-1'
	});
};
