/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PO_Purchase_Request', {
		PR_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PO_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		style_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		color_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Of_Quantity: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'PO_Purchase_Request'
	});
};
