const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const ajv = new Ajv();

//Import controllers which hold CRUD methods foreach models
const vendor = require('../controllers/vendorController');

//importing schema
const vendorSchema = require('../schema/vendor/vendorSchema.json');
const vendorbankersSchema = require('../schema/vendor/vendorbankersSchema.json');
const vendorcontactSchema = require('../schema/vendor/vendorcontactSchema.json');
const vendoritemhistorySchema = require('../schema/vendor/vendoritemhistorySchema.json');
const vendoritemsSchema = require('../schema/vendor/vendoritemsSchema.json');
const vendorjobworksSchema = require('../schema/vendor/vendorjobworksSchema.json');
const vendornotesSchema = require('../schema/vendor/vendornotesSchema.json');

function errorResponse(schemaErrors) {
    let errors = schemaErrors.map((error) => {
      return {
        path: error.dataPath,
        message: error.message
      }
    })
    return {
      status: 'failed',
      errors: errors
    }
}

let validateSchema = (schemaName) => {
    return (req, res, next) => {
        let valid = ajv.validate(schemaName, req.body)
        if (!valid) {
            return res.status(422).send(errorResponse(ajv.errors))
        }
        next();
    }
}

//vendor
router.get('/', vendor.getVendors);
router.get('/:id', vendor.getVendorById);
router.post('/', validateSchema(vendorSchema), vendor.createVendor);
router.put('/:id', validateSchema(vendorSchema), vendor.updateVendor);
router.delete('/:id', vendor.deleteVendor);

//vendor_bankers
router.get('/:vendorid/bankers', vendor.getVendorBankers);
router.get('/:vendorid/bankers/:id', vendor.getVendorBankerById);
router.post('/:vendorid/bankers', validateSchema(vendorbankersSchema), vendor.createVendorBanker);
router.patch('/:vendorid/bankers/:id', validateSchema(vendorbankersSchema), vendor.updateVendorBanker);

//vendor_contact
router.get('/:vendorid/contacts', vendor.getVendorContacts);
router.get('/:vendorid/contacts/:id', vendor.getVendorContactById);
router.post('/:vendorid/contacts', validateSchema(vendorcontactSchema), vendor.createVendorContact);
router.patch('/:vendorid/contacts/:id',validateSchema(vendorcontactSchema), vendor.updateVendorContact);
router.delete('/:vendorid/contacts/:id', vendor.deleteVendorContact);

//vendor_items
router.get('/:vendorid/items', vendor.getVendorItems);
router.get('/:vendorid/items/:id', vendor.getVendorItemById);
router.post('/:vendorid/items', validateSchema(vendoritemsSchema), vendor.createVendorItem);
router.patch('/:vendorid/items/:id', validateSchema(vendoritemsSchema), vendor.updateVendorItem);
router.delete('/:vendorid/items/:id', vendor.deleteVendorItem);

//vendor_item_history
router.get('/:vendorid/history', vendor.getVendorItemHistory);
router.get('/:vendorid/history/:id', vendor.getVendorItemById);
router.post('/:vendorid/history', validateSchema(vendoritemhistorySchema), vendor.createVendorItemHistory);
router.patch('/:vendorid/history/:id', validateSchema(vendoritemhistorySchema), vendor.updateVendorItemHistory);
router.delete('/:vendorid/history/:id', vendor.deleteVendorItemHistory);

//vendor_job_works
router.get('/:vendorid/job-work', vendor.getVendorJobWorks);
router.get('/:vendorid/job-work/:id', vendor.getVendorJobWorkById);
router.post('/:vendorid/job-work', validateSchema(vendorjobworksSchema), vendor.createVendorJobWork);
router.patch('/:vendorid/job-work/:id', validateSchema(vendorjobworksSchema), vendor.updateVendorJobWork);
router.delete('/:vendorid/job-work/:id', vendor.deleteVendorJobWork);

//vendor_notes
router.get('/:vendorid/notes', vendor.getVendorNotes);
router.get('/:vendorid/notes/:id', vendor.getVendorNoteById);
router.post('/:vendorid/notes/', validateSchema(vendornotesSchema), vendor.createVendorNote);
router.patch('/:vendorid/notes/:id', validateSchema(vendornotesSchema), vendor.updateVendorNote);
router.delete('/:vendorid/notes/:id', vendor.deleteVendorNote);

module.exports = router;