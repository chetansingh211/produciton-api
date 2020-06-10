/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Invoice_Notes', {
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Note_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
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
		tableName: 'Invoice_Notes'
	});
};
