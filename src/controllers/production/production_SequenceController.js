var models = require('../../models');
const ProductionSequenceValidation = require('./validator/productionSequenceValidation');

module.exports= {
    findAll(req, res){
        models.Production_Sequence.findAll({order: [['production_sequence_id', 'ASC']]})
        .then(function(production_sequence){
            res.status(200).json(production_sequence);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Production_Sequence.findById(req.params.id)
        .then(function(production_sequence){
            res.status(200).json(production_sequence);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate the data
        if(ProductionSequenceValidation.validateCreate()){
        var production_sequence = models.Production_Sequence.Build();
        production_sequence.process_id = req.body.process_id;
        production_sequence.sequence_no = req.body.sequence_no;
        production_sequence.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        })
    }
    },
    update(req, res){
        models.Production_Sequence.findById(req.params.id)
        .then(function(production_sequence){
        if(ProductionSequenceValidation.validateUpdate()){
        production_sequence.process_id = req.body.process_id;
        production_sequence.sequence_no = req.body.sequence_no;
        production_sequence.save()
        .then(function(production_sequence){
            res.status(200).json(production_sequence);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(ProductionSequenceValidation.validateDelete()){
        models.Production_Sequence.destroy({
            where: {
                production_sequence_id: req.params.id
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