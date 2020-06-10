/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('issue_application_details', {
		issue_application_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		shipment_ref_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		shipment_details_ref_no: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		eou_item_ref_no: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true
		},
		style_code: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		imported_item_ref_no: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		quantity_issued: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'issue_application_details'
	});
};
