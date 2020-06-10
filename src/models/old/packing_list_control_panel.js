/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('packing_list_control_panel', {
		plist_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		plist_type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		size_box_no: {
			type: "MONEY",
			allowNull: true
		},
		size_style: {
			type: "MONEY",
			allowNull: true
		},
		size_desc: {
			type: "MONEY",
			allowNull: true
		},
		size_color: {
			type: "MONEY",
			allowNull: true
		},
		size_size1: {
			type: "MONEY",
			allowNull: true
		},
		size_size2: {
			type: "MONEY",
			allowNull: true
		},
		size_size3: {
			type: "MONEY",
			allowNull: true
		},
		size_size4: {
			type: "MONEY",
			allowNull: true
		},
		size_size5: {
			type: "MONEY",
			allowNull: true
		},
		size_size6: {
			type: "MONEY",
			allowNull: true
		},
		size_size7: {
			type: "MONEY",
			allowNull: true
		},
		size_size8: {
			type: "MONEY",
			allowNull: true
		},
		size_size9: {
			type: "MONEY",
			allowNull: true
		},
		size_size10: {
			type: "MONEY",
			allowNull: true
		},
		size_size11: {
			type: "MONEY",
			allowNull: true
		},
		size_size12: {
			type: "MONEY",
			allowNull: true
		},
		size_size13: {
			type: "MONEY",
			allowNull: true
		},
		size_size14: {
			type: "MONEY",
			allowNull: true
		},
		size_size15: {
			type: "MONEY",
			allowNull: true
		},
		size_pcs_per_box: {
			type: "MONEY",
			allowNull: true
		},
		size_total_qty: {
			type: "MONEY",
			allowNull: true
		},
		x_box_no: {
			type: "MONEY",
			allowNull: true
		},
		x_style: {
			type: "MONEY",
			allowNull: true
		},
		x_desc: {
			type: "MONEY",
			allowNull: true
		},
		x_color: {
			type: "MONEY",
			allowNull: true
		},
		x_size1: {
			type: "MONEY",
			allowNull: true
		},
		x_size2: {
			type: "MONEY",
			allowNull: true
		},
		x_size3: {
			type: "MONEY",
			allowNull: true
		},
		x_size4: {
			type: "MONEY",
			allowNull: true
		},
		x_size5: {
			type: "MONEY",
			allowNull: true
		},
		x_size6: {
			type: "MONEY",
			allowNull: true
		},
		x_size7: {
			type: "MONEY",
			allowNull: true
		},
		x_size8: {
			type: "MONEY",
			allowNull: true
		},
		x_size9: {
			type: "MONEY",
			allowNull: true
		},
		x_size10: {
			type: "MONEY",
			allowNull: true
		},
		x_size11: {
			type: "MONEY",
			allowNull: true
		},
		x_size12: {
			type: "MONEY",
			allowNull: true
		},
		x_size13: {
			type: "MONEY",
			allowNull: true
		},
		x_size14: {
			type: "MONEY",
			allowNull: true
		},
		x_size15: {
			type: "MONEY",
			allowNull: true
		},
		x_pcs_per_box: {
			type: "MONEY",
			allowNull: true
		},
		x_total_qty: {
			type: "MONEY",
			allowNull: true
		}
	}, {
		tableName: 'packing_list_control_panel'
	});
};
