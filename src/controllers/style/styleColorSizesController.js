var models = require('../../models');
const StyleColorSizesValidation = require('./validator/styleColorSizesValidation');

module.exports = {
    findAll(req, res){
        models.style_color_sizes.findAll({order: [['style_color_size_id', ' ASC']]})
        .then(function(style_color_sizes){
            res.status(200).json(style_color_sizes);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.style_color_sizes.findById(req.params.id)
        .then(function(style_color_sizes){
            res.status(200).json(style_color_sizes);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(StyleColorSizesValidation.validateCreate(req, res)){
            var style_color_sizes = models.style_color_sizes.Build();
            style_color_sizes.style_id = req.body.style_id;
            style_color_sizes.order_id = req.body.order_id;
            style_color_sizes.size_id = req.body.size_id;
            style_color_sizes.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.style_color_sizes.findById(req.params.id)
        .then(function(style_color_sizes){
            if(StyleColorSizesValidation.validateUpdate()){
                style_color_sizes.style_id = req.body.style_id;
                style_color_sizes.color_id = req.body.color_id;
                style_color_sizes.size_id = req.body.size_id;
                style_color_sizes.save()
                .then(function(style_color_sizes){
                    res.status(200).json(style_color_sizes);
                })
                .catch(function(error){
                    res.status(500).json(error);
                });
            }
        });
    },
    delete(req, res){
        if(StyleColorSizesValidation.validateDelete()){
            models.style_color_sizes.destroy({
                where: {
                    style_color_size_id : req.params.id
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