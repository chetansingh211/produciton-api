/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample_Approval_reqd', {
		Approval_Type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Request_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sample_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Notify: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Bill_To: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Chargeable_or_Free: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Amount: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CShortName: {
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
		}
	}, {
		tableName: 'Sample_Approval_reqd'
	});
};
