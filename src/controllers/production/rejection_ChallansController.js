var models = require('../../models');
const RejectionChallansValidation = require('./validator/rejectionChallansValidation');

module.exports= {
    findAll(req, res){
        models.Rejection_Challans.findAll({order: [['rejection_challans_id']]})
        .then(function(rejection_challans){
            res.status(200).json(rejection_challans);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Rejection_Challans.findById(req.params.id)
        .then(function(rejection_challans){
            res.status(200).json(rejection_challans);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate the data
        if(RejectionChallansValidation.validateCreate()){
        var rejection_challans = models.Rejection_Challans.Build();
        rejection_challans.rejection_challan_number = req.body.rejection_challan_number;
        rejection_challans.challan_type = req.body.challan_type;
        rejection_challans.challan_date = req.body.challan_date;
        rejection_challans.quantity = req.body.quantity;
        rejection_challans.unit_quantity = req.body.unit_quantity;
        rejection_challans.status = req.body.status;
        rejection_challans.rejected_by = req.body.rejected_by;
        rejection_challans.through_person = req.body.through_person;
        rejection_challans.remarks = req.body.remarks;
        rejection_challans.vendor_id = req.body.vendor_id;
        rejection_challans.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Rejection_Challans.findById(req.params.id)
        .then(function(rejection_challans){
        if(RejectionChallansValidation.validateUpdate()){
        rejection_challans.rejection_challan_number = req.body.rejection_challan_number;
        rejection_challans.challan_type = req.body.challan_type;
        rejection_challans.challan_date = req.body.challan_date;
        rejection_challans.quantity = req.body.quantity;
        rejection_challans.unit_quantity = req.body.unit_quantity;
        rejection_challans.status = req.body.status;
        rejection_challans.rejected_by = req.body.rejected_by;
        rejection_challans.through_person = req.body.through_person;
        rejection_challans.remarks = req.body.remarks;
        rejection_challans.vendor_id = req.body.vendor_id;
        rejection_challans.save()
        .then(function(rejection_challans){
            res.status(200).json(rejection_challans);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(RejectionChallansValidation.validateDelete()){
        models.Rejection_Challans.destroy({
            where: {
                rejection_challans_id: req.params.id
            }
        })
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    }
};