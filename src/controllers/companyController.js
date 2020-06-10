var models = require('../../models');
const { validationResult } = require('express-validator/check');

module.exports = {
	findAll(req, res){
		models.company.findAll({order: [['company_id', 'ASC']]})
		.then(function(company){
			res.status(200).json(company);
		}).catch(function(error){
			res.status(500).json(error);
		});
	},
	findOne(req, res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ error: errors.array() });
            return;
        }		
		models.company.findById(req.params.id)
		.then(function(company){
			res.status(200).json(company);
		}).catch(function(error){
			res.status(500).json(error);
		});
	},
	create(req, res){
		//Validate the data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ error: errors.array() });
            return;
        }		
		var company = models.company.build();
		company.company_name = req.body.company_name;
		company.contact_name = req.body.contact_name;
		company.address = req.body.address;
		company.city= req.body.city;
		company.zip = req.body.zip;		
		company.state = req.body.state;
		company.country = req.body.country;
		company.phone1 = req.body.phone1;
		company.phone2 = req.body.phone2;
		company.fax = req.body.fax;
		company.e_mail = req.body.e_mail;
		company.signatory_name = req.body.signatory_name;
		company.ceo_name = req.body.ceo_name;
		company.import_export_code = req.body.import_export_code;
		company.rcmc_no = req.body.rcmc_no;
		company.aepc_reg_no = req.body.aepc_reg_no;
		company.aepc_reg_date = req.body.aepc_reg_date;
		company.validity = req.body.validity;
		company.rbi_code = req.rbi_code;
		company.drawback_ledger = req.body.drawback_ledger;
		company.textile_committee_regn_no = req.body.textile_committee_regn_no;
		company.cha_license_no = req.body.cha_license_no;
		company.establishment_pf_code = req.body.establishment_pf_code;
		company.authorised_signatory_desig = req.body.authorised_signatory_desig;
		company.company_type = req.body.company_type;
		company.income_tax_number = req.body.income_tax_number;
		company.gst_number = req.gst_number;
		company.eec_number = req.eec_number;
		company.save()
		.then(function(instance){
			res.status(200).json(instance);
		}).catch(function(error){
			res.status(500).json(error);
		});			
	},
	update(req, res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ error: errors.array() });
            return;
        }		
		models.company.findById(req.params.id)
		.then(function(company){
			company.company_name = req.body.company_name;
			company.contact_name = req.body.contact_name;
			company.address = req.body.address;
			company.city= req.body.city;
			company.zip = req.body.zip;		
			company.state = req.body.state;
			company.country = req.body.country;
			company.phone1 = req.body.phone1;
			company.phone2 = req.body.phone2;
			company.fax = req.body.fax;
			company.e_mail = req.body.e_mail;
			company.signatory_name = req.body.signatory_name;
			company.ceo_name = req.body.ceo_name;
			company.import_export_code = req.body.import_export_code;
			company.rcmc_no = req.body.rcmc_no;
			company.aepc_reg_no = req.body.aepc_reg_no;
			company.aepc_reg_date = req.body.aepc_reg_date;
			company.validity = req.body.validity;
			company.rbi_code = req.rbi_code;
			company.drawback_ledger = req.body.drawback_ledger;
			company.textile_committee_regn_no = req.body.textile_committee_regn_no;
			company.cha_license_no = req.body.cha_license_no;
			company.establishment_pf_code = req.body.establishment_pf_code;
			company.authorised_signatory_desig = req.body.authorised_signatory_desig;
			company.company_type = req.body.company_type;
			company.income_tax_number = req.body.income_tax_number;
			company.gst_number = req.gst_number;
			company.eec_number = req.eec_number;
			company.save()
			.then(function(company){
				res.status(200).json(company);
			}).catch(function(error){
				res.status(500).json(error);
			});
		});
	},
	delete(req, res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ error: errors.array() });
            return;
        }		
		models.company.destroy({
			where: {
				company_id: req.params.id
			}
		}).then(function(result){
			res.status(200).json(result);
		}).catch(function(error){
			res.status(500).json(error);
		});
	}
};