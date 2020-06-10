/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('general_packing_list_detail', {
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
		serial_no: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		plist_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		area: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		net_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		gross_weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		column_1: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		from_box: {
			type: DataTypes.STRING,
			allowNull: true
		},
		to_box: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_order: {
			type: DataTypes.STRING,
			allowNull: true
		},
		exporter_reference: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_color: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_color: {
			type: DataTypes.STRING,
			allowNull: true
		},
		buyer_size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size: {
			type: DataTypes.STRING,
			allowNull: true
		},
		uom: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		store: {
			type: DataTypes.STRING,
			allowNull: true
		},
		department: {
			type: DataTypes.STRING,
			allowNull: true
		},
		final_dest_country: {
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
		}
	}, {
		tableName: 'general_packing_list_detail'
	});
};
