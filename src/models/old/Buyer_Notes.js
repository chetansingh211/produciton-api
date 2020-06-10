/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_notes', {
		buyer_note_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		note_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		note_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		note_text: {
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
	},
	 {
		tableName: 'buyer_notes'
	});
};
