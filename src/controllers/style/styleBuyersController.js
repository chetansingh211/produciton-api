var models = require('../../models');
const StyleBuyersValidation = require('./validator/styleBuyersValidation');

module.exports = {
    findAll(req, res){
        models.style_buyers.findAll({order: [[ 'style_buyer_id', 'ASC']]})
        .then(function(style_buyers){
            res.status(200).json(style_buyers);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.style_buyers.findById(req.params.id)
        .then(function(style_buyers){
            res.status(200).json(style_buyers);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        if(StyleBuyersValidation.validateCreate(req, res)){
            var style_buyers = models.style_buyers.Build();
            style_buyers.buyer_id = req.body.buyer_id;
            style_buyers.style_id = req.body.style_id;
            style_buyers.save()
            .then(function(instance){
                res.status(200).json(instance);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    },
    update(req, res){
        models.style_buyers.findById(req.params.id)
        .then(function(style_buyers){
            if(StyleBuyersValidation.validateUpdate()){
                style_buyers.buyer_id = req.body.buyer_id;
                style_buyers.style_id = req.body.style_buyers;
                style_buyers.save()
                .then(function(style_buyers){
                    res.status(200).json(style_buyers);
                })
                .catch(function(error){
                    res.status(500).json(error);
                });
            }
        });
    },
    delete(req, res){
        if(StyleBuyersValidation.validateDelete()){
            models.style_buyers.destroy({
                where: {
                    style_buyer_id : req.params.id
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