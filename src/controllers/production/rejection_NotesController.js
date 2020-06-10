var models = require('../../models');
const RejectionNotesValidation = require('./validator/rejectionNotesValidation');

module.exports= {
    findAll(req, res){
        models.Rejection_Notes.findAll({order: [['rejection_notes_id', 'ASC']]})
        .then(function(rejection_notes){
            res.status(200).json(rejection_notes);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Rejection_Notes.findById(req.params.id)
        .then(function(rejection_notes){
            res.status(200).json(rejection_notes);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate the data
        if(RejectionNotesValidation.validateCreate()){
        var rejection_notes = models.Rejection_Notes.Build();
        rejection_notes.challan_number = req.body.challan_number;
        rejection_notes.note_date = req.body.note_date;
        rejection_notes.note = req.body.note;
        rejection_notes.topic = req.body.topic;
        rejection_notes.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Rejection_Notes.findById(req.params.id)
        .then(function(rejection_notes){
            if(RejectionNotesValidation.validateUpdate()){
            rejection_notes.challan_number = req.body.challan_number;
            rejection_notes.note_date = req.body.note_date;
            rejection_notes.note = req.body.note;
            rejection_notes.topic = req.body.topic;
            rejection_notes.save()
            .then(function(rejection_notes){
                res.status(200).json(rejection_notes);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
        });
    },
    delete(req, res){
        if(RejectionNotesValidation.validateDelete()){
        models.Rejection_Notes.destroy({
            where: {
                rejection_notes: req.params.id
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