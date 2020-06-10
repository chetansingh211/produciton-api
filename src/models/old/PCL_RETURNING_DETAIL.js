/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PCL_RETURNING_DETAIL', {
		Negotiation_or_Realization: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PCL_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		LC_or_Order: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Reference_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Exchange_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Exchange_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fcy_value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Inr_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Return_Date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'PCL_RETURNING_DETAIL'
	});
};
