var models = require('../../models');
const StylePartsValidation = require('./validator/stylePartsValidation');

module.exports = {
    findAll (req, res){
        models.style_parts.findAll({order: [['style_Part_id', 'ASC']]})
    .then(function(style_parts){
        res.status(200).json(style_parts);
    })
    .catch(function(error){
        res.status(500).json(error);
    });
    },
    findOne(req, res){
        models.style_parts.findById(req.params.id)
        .then(function(style_parts){
            res.status(200).json(style_parts);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(StylePartsValidation.validateCreate()) {
            var styleparts = models.style_parts.Build();
            styleparts.part_description = req.body.part_description;
            styleparts.style_id = req.body.style_id;
            styleparts.quantity = req.body.quantity;
            styleparts.unit_quantity = req.body.unit_quantity;
            styleparts.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.style_parts.findById(req.params.id)
        .then(function(styleparts){
            if(StylePartsValidation.validateUpdate()){
                styleparts.part_description = req.body.part_description;
                styleparts.style_id = req.body.style_id;
                styleparts.quantity = req.body.quantity;
                styleparts.unit_quantity = req.body.unit_quantity;
                styleparts.save()
                .then(function(styleparts){
                    res.status(200).json(styleparts);
                })
                .catch(function(error){
                    res.status(500).json(error);
                });
            }
        });
    },
    delete(req, res){
        if(StylePartsValidation.validateDelete()){
            models.style_parts.destroy({
                where: {
                    style_Parts_id: req.params.id
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