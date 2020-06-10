/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Order_LC', {
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Order_LC'
	});
};
