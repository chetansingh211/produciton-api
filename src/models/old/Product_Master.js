/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Product_Master', {
		Product_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Product_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sketch: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Product_Master'
	});
};
