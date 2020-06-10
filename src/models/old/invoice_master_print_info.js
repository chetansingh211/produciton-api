/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoice_master_print_info', {
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
		col1_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		col2_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		col3_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		col4_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		col5_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		col6_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		col7_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		col8_print: {
			type: DataTypes.BOOLEAN,
			allowNull: false
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
		tot_columns: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		print_width: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		col1_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		col2_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		col3_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		col4_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		col5_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		col6_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		col7_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		col8_head: {
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
		tableName: 'invoice_master_print_info'
	});
};
