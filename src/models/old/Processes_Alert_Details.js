/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Processes_Alert_Details', {
		Alert_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Node_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Process_Set_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Alert_Topic: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Alert_Message: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Priority: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Status: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Processes_Alert_Details'
	});
};
