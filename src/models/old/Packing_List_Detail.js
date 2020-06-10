/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Packing_List_Detail', {
		Packing_List_Detail_Master_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		PList_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Box_From: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Box_To: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Assortment_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Marks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_Order_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Color_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		size1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size13: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size14: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size15: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Size1_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size2_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size3_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size4_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size5_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size6_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size7_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size8_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size9_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size10_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size11_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size12_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size13_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size14_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Size15_Qty: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		our_color_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size13: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size14: {
			type: DataTypes.STRING,
			allowNull: true
		},
		our_size15: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Number_Of_Sizes: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size_Sequence: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ratio_Sequence: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Buyer_style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Segment_Desc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		article_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size_ratio1: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio2: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio3: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio4: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio5: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio6: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio7: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio8: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio9: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio10: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio11: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio12: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio13: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio14: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size_ratio15: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		prepack_1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_13: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_14: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prepack_15: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Packing_List_Detail'
	});
};
