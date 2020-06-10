/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('general_packing_list_master', {
		invoice_number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		plist_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		style_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		color_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		size_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		qty_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		area_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		net_wt_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		gross_wt_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		column_1_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		column2_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		column_3_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		desc_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		tot_columns: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column1_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column2_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column3_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column4_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column5_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column6_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column7_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column8_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column9_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column10_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column11_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		column12_ratio: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		comments: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		packing_list_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		style_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		color_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		qty_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		area_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		net_wt_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		gross_wt_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_1_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column2_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_3_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		desc_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		box_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		column_12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		compute_column1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		compute_column2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		compute_operator: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'general_packing_list_master'
	});
};
