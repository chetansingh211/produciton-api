/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adhoc_request', {
		adhoc_request_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adhoc_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		adhoc_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		process_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		adhoc_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		department_or_vendor: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		department_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		requested_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		authorized_by: {
			type: DataTypes.STRING,
			allowNull: true
		},
		authorized_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_challan_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		vendor_challan_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vehicle_No: {
			type: DataTypes.STRING,
			allowNull: true
		},
		through_person: {
			type: DataTypes.STRING,
			allowNull: true
		},
		form: {
			type: DataTypes.STRING,
			allowNull: true
		},
		form_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		vehicle: {
			type: DataTypes.STRING,
			allowNull: true
		},
		order_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		order_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		mich: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		dispatch: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tax: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cartage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		due_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	}, {
		tableName: 'adhoc_request'
	});
};
