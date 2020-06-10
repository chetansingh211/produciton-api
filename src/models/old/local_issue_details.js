/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('local_issue_details', {
		issue_application_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		local_item_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		quantity_issued: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		style_code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'local_issue_details'
	});
};
