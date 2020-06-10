/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LC_Declaration', {
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
		Declaration_SNo: {
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
		Declaration_Description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'LC_Declaration'
	});
};
