/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rejection_notes', {
		rejection_note_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		challan_number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		note_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		note_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		topic: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'rejection_notes'
	});
};
