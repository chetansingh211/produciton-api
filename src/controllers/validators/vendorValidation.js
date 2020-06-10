const { param, body} = require('express-validator/check');
var models = require('../../../models');
module.exports = {
    validate(method) {
        switch(method) {
            case 'POST' : {
                return [
                    body('vendor_id', 'Vendor Id does not exists').exists(),
                    body('vendor_id', 'Vendor Id does not exists').not().isInt()

                ]
            }
            case 'PATCH'  : {
                return[
                    param('id').exists().custom(value => this.isValid(value)),
                    body('vendor_id', 'Vendor Id does not exists').exists(),
                    body('vendor_id', 'Vendor Id does not exists').not().isInt()

                ]
            }
            case 'DELETE' : {
                return [
                    param('id').exists().custom(value => this.isValid(value))
                ]
            }
            case 'GET' : {
                return [
                    param('id').exists().custom(value => this.isValid(value))
                ]
            }
        }
    },
    isValid(id) {
        return models.vendor.findById(id)
        .then(result => {
            if(!result) throw new Error(' Vendor with id ['+ id +']not found');
        });
    }
}