/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Tax_Forms', {
		Form_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Form_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Form_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Form_Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Form_Limit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Tax_Forms'
	});
};
