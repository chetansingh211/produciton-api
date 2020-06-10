/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Conditions', {
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
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Condition_SNo: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Show_In_Invoice: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Show_In_Packing_List: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Condition_Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'LC_Conditions'
	});
};
