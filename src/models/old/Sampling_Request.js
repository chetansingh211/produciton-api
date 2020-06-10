/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sampling_Request', {
		Request_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Department_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Agent_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Request_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Request_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Receipt_Mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quota_Category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Season: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Style_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status_Ch_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Changed_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_CCY: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sample_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Total__Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Amt_in_INR: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Conversion_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Payment_mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Refernce_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Unit_rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		No_of_pieces: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Sampling_Request'
	});
};
