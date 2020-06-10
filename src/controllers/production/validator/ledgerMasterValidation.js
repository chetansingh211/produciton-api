var validation = {
    validateCreate : function(req, res){
        var ab_validate = Boolean(true);
        var error_text = [];
        //add validation here
        if(ab_validate === false){
            res.status(422).json(error_text);
        }
        return ab_validate;
    },
    validate : function (){
        var ab_validate = Boolean(true);
        var error_text = [];
        //add validation here
        if(ab_validate === false){
            res.status(422).json(error_text);
        }
        return ab_validate;
    },
    validateDelete: function(){
        var ab_validate = Boolean(true);
        var error_text = [];
        //add validation here
        if(ab_validate === false){
            res.status(500).json(error_text);
        }
        return ab_validate;
    }
};
module.exports = validation;