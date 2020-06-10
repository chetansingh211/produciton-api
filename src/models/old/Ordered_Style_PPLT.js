/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Ordered_Style_PPLT', {
		Color_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Style_Id: {
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
		Company_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Process_Sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Process_Id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Cost_Involved: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_of_cost: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Time_Required: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Marginable_Yes_No: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Calc_Start_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Calc_End_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Actual_Start_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Qty_start: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Actual_End_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Qty_end: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Planned_Start_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Planned_End_Date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Ordered_Style_PPLT'
	});
};
