/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rewarehousing_details', {
		shipment_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		rewarehousing_certificate_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		commissioner_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		incharge_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		warehouse_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		rewarehousing_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'rewarehousing_details'
	});
};
