/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Transfer_Quantity', {
		xfer__uantity_serial__no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Xfer_Serial_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Serial_No: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transfer_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'LC_Transfer_Quantity'
	});
};
