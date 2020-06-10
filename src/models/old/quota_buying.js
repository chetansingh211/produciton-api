/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('quota_buying', {
		SNO: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		transfer_against_qc_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		company_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		quota_system: {
			type: DataTypes.STRING,
			allowNull: false
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Transferer_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		State: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Pin_Code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Registration_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Registration_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Registration_Expiry_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity_transfered: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Premium_amount: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Unit_Of_Measurement: {
			type: DataTypes.STRING,
			allowNull: true
		},
		new_qc_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		new_quota_system: {
			type: DataTypes.STRING,
			allowNull: true
		},
		new_quota_category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		received: {
			type: DataTypes.STRING,
			allowNull: true
		},
		date_received: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Certificate_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Certificate_Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Agency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Current_Year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Segment: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Currency: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Certificate_country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		RECEIVED_AND_UPDATED: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'quota_buying'
	});
};
