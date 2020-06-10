/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('WIP_Process', {
		System_Key: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Item_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Process: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sequence: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Opening_Balance_Qty: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Opening_Value: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Closing_Balance_Qty: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Closing_Value: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Total_Issues: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Total_Receipts: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Total_Returns: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Total_Rejections: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'WIP_Process'
	});
};
