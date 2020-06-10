var models = require('../../models');
const StyleProcessValidation = require('./validator/styleProcessValidation');

module.exports = {
    findAll(req, res){
        models.style_process.findAll({order: [['style_process_id', 'ASC']]})
        .then(function(style_process){
            res.status(200).json(style_process);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.style_process.findById(req.params.id)
        .then(function(style_process){
            res.status(200).json(style_process);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(StyleProcessValidation.validateCreate(req, res)){
            var styleProcess = models.style_process.Build();
            styleProcess.style_id = req.body.style_id;
            styleProcess.order_id = req.body.order_id;
            styleProcess.process_id = req.body.process_id;
            styleProcess.process_sequence = req.body.process_sequence;
            styleProcess.process_rate = req.body.process_rate;
            styleProcess.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.style_process.findById(req.params.id)
        .then(function(styleProcess){
            if(StyleProcessValidation.validateUpdate()){
                styleProcess.style_id = req.body.style_id;
                styleProcess.order_id = req.body.order_id;
                styleProcess.process_id = req.body.process_id;
                styleProcess.process_sequence = req.body.process_sequence;
                styleProcess.process_rate = req.body.process_rate;
                styleProcess.save()
                .then(function(styleProcess){
                    res.status(200).json(styleProcess);
                })
                .catch(function(error){
                    res.status(500).json(error);
                });
            }
        });
    },
    delete(req, res){
        if(StyleProcessValidation.validateDelete()){
            models.style_process.destroy({
                where: {
                    style_process_id : req.params.id
                }
            }).then(function(result){
                res.status(200).json(result);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    }
};