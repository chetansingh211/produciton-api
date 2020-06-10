var models = require('../../models');
const StyleColourSizeBomValidation = require('./validator/styleColourSizeBomValidation');

module.exports = {
    findAll(req, res){
        models.style_colour_size_bom.findAll({order: [['style_colour_size_bom_id', 'ASC']]})
        .then(function(style_colour_size_bom){
            res.status(200).json(style_colour_size_bom);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.style_colour_size_bom.findById(req.params.id)
        .then(function(style_colour_size_bom){
            res.status(200).json(style_colour_size_bom);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(StyleColourSizeBomValidation.ValidateCreate(req, res)){
            var style_colour_size_bom = models.style_colour_size_bom.Build();
            style_colour_size_bom.style_id = req.body.style_id;
            style_colour_size_bom.item_id = req.body.item_id;
            style_colour_size_bom.size_id = req.body.size_id;
            style_colour_size_bom.color_id = req.body.color_id;
            style_colour_size_bom.buyer_id = req.body.buyer_id;
            style_colour_size_bom.process_sequence = req.body.process_sequence;
            style_colour_size_bom.consumption = req.body.consumption;
            style_colour_size_bom.wastage_factor = req.body.wastage_factor;
            style_colour_size_bom.cost = req.body.cost;
            style_colour_size_bom.item_width = req.body.item_width;
            style_colour_size_bom.measurement_unit = req.body.measurement_unit;
            style_colour_size_bom.unit_cost = req.body.unit_cost;
            style_colour_size_bom.process_id = req.body.process_id;
            style_colour_size_bom.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.style_colour_size_bom.findById(req.params.id)
        .then(function(style_colour_size_bom){
            if(StyleColourSizeBomValidation.validateUpdate()){
                style_colour_size_bom.style_id = req.body.style_id;
                style_colour_size_bom.item_id = req.body.item_id;
                style_colour_size_bom.size_id = req.body.size_id;
                style_colour_size_bom.color_id = req.body.color_id;
                style_colour_size_bom.buyer_id = req.body.buyer_id;
                style_colour_size_bom.process_sequence = req.body.process_sequence;
                style_colour_size_bom.consumption = req.body.consumption;
                style_colour_size_bom.wastage_factor = req.body.wastage_factor;
                style_colour_size_bom.cost = req.body.cost;
                style_colour_size_bom.item_width = req.body.item_width;
                style_colour_size_bom.measurement_unit = req.body.measurement_unit;
                style_colour_size_bom.unit_cost = req.body.unit_cost;
                style_colour_size_bom.process_id = req.body.process_id;
                style_colour_size_bom.save()
                .then(function(style_colour_size_bom){
                    res.status(200).json(style_colour_size_bom);
                })
                .catch(function(error){
                    res.status(500).json(error);
                });
            }
        });
    },
    delete(req, res){
        if(StyleColourSizeBomValidation.validateDelete()){
            models.style_colour_size_bom.destroy({
                where: {
                    style_colour_size_bom_id : req.params.id
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