var models = require('../../models');
const StyleColorValidation = require('./validator/styleColorValidation');

module.exports = {
    findAll(req, res){
        models.style_color.findAll({order: [[ 'style_color_id', 'ASC']]})
        .then(function(style_color){
            res.status(200).json(style_color);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.style_color.findById(req.params.id)
        .then(function(style_color){
            res.status(200).json(style_color);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(StyleColorValidation.validateCreate(req, res)){
            var style_color = models.style_color.Build();
            style_color.style_id = req.body.style_id;
            style_color.color_id = req.body.color_id;
            style_color.description = req.body.description;
            style_color.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.style_color.findById(req.params.id)
        .then(function(style_color){
            if(StyleColorValidation.validateUpdate()){
                style_color.style_id = req.body.style_id;
                style_color.color_id = req.body.color_id;
                style_color.description = req.body.description;
                style_color.save()  
                .then(function(style_color){
                    res.status(200).json(style_color);
                })
                .catch(function(error){
                    res.status(500).json(error);
                });
            }
        });  
    },
    delete(req, res){
        if(StyleColorValidation.validateDelete()){
            models.style_color.destroy({
                where: {
                    style_color_id: req.params.id
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