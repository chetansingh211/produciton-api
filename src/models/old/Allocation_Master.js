/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Allocation_Master', {
		Location_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Allocation_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Allocated_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Allocation_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Authorised_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Authorised_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Allocation_Master'
	});
};
