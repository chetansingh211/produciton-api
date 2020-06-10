/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Packing_List_Detail_JPC_temp', {
		Master_Carton_No: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		PList_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Plist_Order_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PCS_per_Carton: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		PCS_per_Blister: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Blister_Per_Carton: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size1_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size2_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size3_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size4_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size5_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size6_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size7_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size8_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size9_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size10_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size11_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size12_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size13_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size14_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Size15_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Ship_Carton_No: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Color_Qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		number_of_sizes: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Box_To: {
			type: DataTypes.INTEGER,
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
		Box_Length: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Box_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Box_height: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Box_Cubic_Meters: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		volume_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Box_Weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Assortment_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Lot_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Marks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Store: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Department: {
			type: DataTypes.STRING,
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
		Buyer_style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PO_Confirmation_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size_sequence: {
			type: DataTypes.STRING,
			allowNull: true
		},
		box_unit_of_measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Segment_Desc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		store_dept: {
			type: DataTypes.STRING,
			allowNull: true
		},
		dept: {
			type: DataTypes.STRING,
			allowNull: true
		},
		invoiced_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		ordered_qty: {
			type: DataTypes.DECIMAL,
			allowNull: true
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
		Associate_Flag: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Sno: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Packing_List_Detail_JPC_temp'
	});
};
