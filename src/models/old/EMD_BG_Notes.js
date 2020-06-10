/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EMD_BG_Notes', {
		Note_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		EMD_Number: {
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
		tableName: 'EMD_BG_Notes'
	});
};
