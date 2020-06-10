/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Packing_list_master_JPC', {
		PList_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		plist_order_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Box_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Net_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Gross_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Box_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PList_Format: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Comments: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		format_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		format_name: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Packing_list_master_JPC'
	});
};
