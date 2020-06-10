/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Requested_Items', {
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PR_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Garment_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Size_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity_Requested: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flag: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'Requested_Items'
	});
};
