/* jshint indent: 1 */
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('company', {
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},		
		company_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		contact_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phone2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		e_mail: {
			type: DataTypes.STRING,
			allowNull: true
		},
		signatory_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ceo_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		import_export_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rcmc_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		aepc_reg_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		aepc_reg_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		validity: {
			type: DataTypes.DATE,
			allowNull: true
		},
		rbi_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		drawback_ledger: {
			type: DataTypes.STRING,
			allowNull: true
		},
		textile_committee_regn_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cha_license_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		establishment_pf_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		authorised_signatory_desig: {
			type: DataTypes.STRING,
			allowNull: true
		},
		company_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		income_tax_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		gst_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		eec_number: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		freezeTableName: true,
		timestamps: false
	  },
	  {
		tableName: 'company'
	});
};