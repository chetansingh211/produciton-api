/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Packing_List_Detail_Master', {
		Packing_List_Detail_Master_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PList_ID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Packing_list_master',
				key: 'PList_ID'
			}
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Packing_list_master',
				key: 'PList_ID'
			}
		},
		Box_From: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Box_To: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Box_Length: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Box_Width: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Box_height: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '((0.00))'
		},
		Store: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Department: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Box_Unit_Of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		no_of_boxes: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Packing_List_Detail_Master'
	});
};
