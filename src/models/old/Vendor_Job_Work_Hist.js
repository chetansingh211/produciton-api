/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Vendor_Job_Work_Hist', {
		Vendor_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Last_Updated: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		Process_Id_4: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Capacity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Lead_time: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Unit_Rate: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Last_updated_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reasons: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	  }, {
		tableName: 'Vendor_Job_Work_Hist'
	});
};
