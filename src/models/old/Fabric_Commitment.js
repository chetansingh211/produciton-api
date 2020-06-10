/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Fabric_Commitment', {
		Reference_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Commitment_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Ctmnt_rcpt_mode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fabric_Description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Qty_Committed: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Qty_Utilised: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Qty_Committed_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Qty_Utilised_Unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ship_Dt_Upper_Limit: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fabric_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Fabric_Commitment'
	});
};
