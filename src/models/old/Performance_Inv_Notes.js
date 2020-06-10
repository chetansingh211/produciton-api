/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Performance_Inv_Notes', {
		Note_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Pro_Inv_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Subject: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NoteDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Note_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Performance_Inv_Notes'
	});
};
