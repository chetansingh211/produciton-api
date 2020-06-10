/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Transferes', {
		Transfer_Date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		XferSerial_No: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LC_No: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Reasons: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transferred_to: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Transferred_Amount: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'LC_Transferes'
	});
};
