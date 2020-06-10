var models = require('../../models');
const ProcessOrderValidation = require('./process/validator/processOrderValidation');

module.exports = {
    findAll(req, res){
        models.process_order.findAll({order: [['process_order_id', 'ASC']]})
        .then(function(process_order){
            res.status(200).json(process_order);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.process_order.findById(req.params.id)
        .then(function(process_order){
            res.status(200).json(process_order);
        })
        .catch(function(process_order){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(ProcessOrderValidation.validateCreate(req, res)){
            var process_order = models.process_order.Build();
            process_order.process_order_number = req.body.process_order_number;
            process_order.vendor_id = req.body.vendor_id;
            process_order.order_type = req.body.order_type;
            process_order.process_id = req.body.process_id;
            process_order.sub_process = req.body.sub_process;
            process_order.order_dt = req.body.order_dt;
            process_order.issued_by = req.body.issued_by;
            process_order.authorised_by = req.body.authorised_by;
            process_order.authorised_dt = req.body.authorised_dt;
            process_order.status = req.body.status;
            process_order.process_value = req.body.process_value;
            process_order.unit_value = req.body.unit_value;
            process_order.despatch_mode = req.body.despatch_mode;
            process_order.cancel_date = req.body.cancel_date;
            process_order.start_delivery_date = req.body.start_delivery_date;
            process_order.end_delivery_date = req.body.end_delivery_date;
            process_order.others_amount = req.body.others_amount;
            process_order.adhoc_flag = req.body.adhoc_flag;
            process_order.flag = req.body.flag;
            process_order.location_id = req.body.location_id;
            process_order.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.process_order.findById(req.params.id)
        .then(function(process_order){
            if(ProcessOrderValidation.validateUpdate()){
                process_order.process_order_number = req.body.process_order_number;
            process_order.vendor_id = req.body.vendor_id;
            process_order.order_type = req.body.order_type;
            process_order.process_id = req.body.process_id;
            process_order.sub_process = req.body.sub_process;
            process_order.order_dt = req.body.order_dt;
            process_order.issued_by = req.body.issued_by;
            process_order.authorised_by = req.body.authorised_by;
            process_order.authorised_dt = req.body.authorised_dt;
            process_order.status = req.body.status;
            process_order.process_value = req.body.process_value;
            process_order.unit_value = req.body.unit_value;
            process_order.despatch_mode = req.body.despatch_mode;
            process_order.cancel_date = req.body.cancel_date;
            process_order.start_delivery_date = req.body.start_delivery_date;
            process_order.end_delivery_date = req.body.end_delivery_date;
            process_order.others_amount = req.body.others_amount;
            process_order.adhoc_flag = req.body.adhoc_flag;
            process_order.flag = req.body.flag;
            process_order.location_id = req.body.location_id;
            process_order.save()
            .then(function(process_order){
                res.status(200).json(process_order);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
            }
        });
    },
    delete(req, res){
        if(ProcessOrderValidation.validateDelete()){
            models.process_order.destroy({
                where: {
                    process_order_id: req.params.id
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