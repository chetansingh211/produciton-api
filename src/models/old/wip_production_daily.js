/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wip_production_daily', {
		Production_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Size_Id: {
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
		Garment_Id: {
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
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Item_Part_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Daily_Issues: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Daily_Receipts: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Daily_Returns: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Daily_Rejections: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Daily_Reissues: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Daily_Rereceipts: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Item_or_Part: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'wip_production_daily'
	});
};
