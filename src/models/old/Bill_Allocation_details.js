/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bill_Allocation_details', {
		System_Key: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Order_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bill_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bill_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bill_Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Bill_Amount_Allocated: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Bill_Allocation_details'
	});
};
