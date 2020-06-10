/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('GSP_Form_A', {
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		GSP_Ref_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		GSP_Book_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GSP_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Means_of_Transport_Route: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GSP_Certified_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		GSP_Location: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'GSP_Form_A'
	});
};
