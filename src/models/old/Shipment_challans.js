/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Shipment_challans', {
		Challan_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Courier_Id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		challan_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Challan_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Issued_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorized_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorization_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Mode_of_Shipment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Airway_Bill_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Airway_Bill_Date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Shipment_challans'
	});
};
