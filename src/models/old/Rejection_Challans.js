/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rejection_challans', {
		rejection_challan_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		rejection_challan_number: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		challan_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		challan_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		unit_quantity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rejected_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		through_person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'rejection_challans'
	});
};
