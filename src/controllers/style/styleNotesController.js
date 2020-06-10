var models = require('../../models');
const StyleNotesValidation = require('./validator/styleNotesValidation');

module.exports = {
    findAll(req, res){
        models.style_notes.findAll({order: [['style_note_id', 'ASC']]})
        .then(function(style_notes){
            res.status(200).json(style_notes);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.style_notes.findById(req.params.id)
        .then(function(style_notes){
            res.status(200).json(style_notes);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
    if(styleNotesValidation.validateCreate(req, res)){
        var style_notes = models.style_notes.Build();
        style_notes.style_id = req.body.style_id;
        style_notes.note_date = req.body.note_date;
        style_notes.note_by = req.body.note_by;
        style_notes.note = req.body.style;
        style_notes.topic = req.body.topic;
        style_notes.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
},
update(req, res){
    models.style_notes.findById(req.params.id)
    .then(function(style_notes){
        if(styleNotesValidation.validateUpdate()){
            style_notes.style_id = req.body.style_id;
            style_notes.note_date = req.body.note_date;
            style_notes.note_by = req.body.note_by;
            style_notes.note = req.body.style;
            style_notes.topic = req.body.topic;
            style_notes.save()
            .then(function(style_notes){
                res.status(200).json(style_notes);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
    });
},
delete(req, res){
    if(styleNotesValidation.validateDelete()){
        models.style_notes.destroy({
            where: {
                style_note_id: req.params.id
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