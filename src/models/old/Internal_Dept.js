/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Internal_Dept', {
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
		Dept_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Dept_Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Contact_Person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Internal_Dept'
	});
};
