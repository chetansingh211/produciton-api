/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Deallocation_Master', {
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
		Deallocation_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Deallocated_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Deallocation_Date: {
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
		tableName: 'Deallocation_Master'
	});
};
