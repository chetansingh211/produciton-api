/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Local_Transporter', {
		Transporter_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Name_of_transporter: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Telex: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Local_Transporter'
	});
};
