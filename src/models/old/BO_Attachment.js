/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BO_Attachment', {
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adhoc_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Adhoc_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_ID: {
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
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		UOM: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'BO_Attachment'
	});
};
