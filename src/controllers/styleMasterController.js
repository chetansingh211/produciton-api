var models = require('../../models');
const StyleMasterValidation = require('./style/validator/styleMasterValidation');

module.exports = {
    findAll(req, res){
        models.style_master.findAll({order: [['style_id' , 'ASC']]})
        .then(function(style_master){
            res.status(200).json(style_master);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.style_master.findById(req.params.id)
        .then(function(style_master){
            res.status(200).json(style_master);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(StyleMasterValidation.validateCreate(req, res)){
            var style_master = models.style_master.Build();
            style_master.style_code = req.body.style_code;
            style_master.buyer_id = req.body.buyer_id;
            style_master.item_id = req.body.item_id;
            style_master.segment = req.body.segment;
            style_master.category_id = req.body.category_id;
            style_master.country_code = req.body.country_code;
            style_master.description = req.body.description;
            style_master.fabric_id = req.body.fabric_id;
            style_master.season_id = req.body.season_id;
            style_master.pattern_number = req.body.pattern_number;
            style_master.style_flag = req.body.style_flag;
            style_master.garment_weight = req.body.garment_weight;
            style_master.company_id = req.body.company_id;
            style_master.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.style_master.findById(req.params.id)
        .then(function(style_master){
            if(StyleMasterValidation.validateUpdate()){
                style_master.style_code = req.body.style_code;
            style_master.buyer_id = req.body.buyer_id;
            style_master.item_id = req.body.item_id;
            style_master.segment = req.body.segment;
            style_master.category_id = req.body.category_id;
            style_master.country_code = req.body.country_code;
            style_master.description = req.body.description;
            style_master.fabric_id = req.body.fabric_id;
            style_master.season_id = req.body.season_id;
            style_master.pattern_number = req.body.pattern_number;
            style_master.style_flag = req.body.style_flag;
            style_master.garment_weight = req.body.garment_weight;
            style_master.company_id = req.body.company_id;
            style_master.save()
            .then(function(style_master){
                res.status(200).json(style_master);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
            }
        });
    },
    delete(req, res){
        if(StyleMasterValidation.validateDelete()){
            models.style_master.destroy({
                where: {
                    style_id : req.params.id
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