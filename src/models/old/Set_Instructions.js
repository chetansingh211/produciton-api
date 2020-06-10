/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Set_Instructions', {
		Set_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Component_Number: {
			type: DataTypes.REAL,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.REAL,
			allowNull: true
		},
		Linked_Order: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Set_Instructions'
	});
};
