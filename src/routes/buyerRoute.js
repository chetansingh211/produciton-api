const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const ajv = new Ajv();

//Import controllers which hold CRUD methods foreach models
const buyer = require('../controllers/buyerController');

//importing schema
const buyerSchema = require('../schema/buyer/buyerSchema.json');
const buyerAgentSchema = require('../schema/buyer/buyer_agentSchema.json');
const buyerBankersSchema = require('../schema/buyer/buyer_bankersSchema.json');
const buyerContactsSchema =  require('../schema/buyer/buyer_contactsSchema.json');
const buyerNotesSchema = require('../schema/buyer/buyer_notesSchema.json');
const buyerInstructionsSchema = require('../schema/buyer/buyer_instructionsSchema.json');
const buyerTermsSchema = require('../schema/buyer/buyer_termsSchema.json');
const buyerSizesSchema = require('../schema/buyer/buyer_sizesSchema.json');

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
    next()
  }
}

//buyers
router.get('/', buyer.getBuyers);
router.get('/:id', buyer.getBuyerById);
router.post('/', validateSchema(buyerSchema), buyer.createBuyer);
router.put('/:id', validateSchema(buyerSchema), buyer.updateBuyer);
router.delete('/:id', buyer.deleteBuyer);

//agents
router.get('/:buyerid/agents', buyer.getBuyerAgents);
router.get('/:buyerid/agents/:id', buyer.getBuyerAgentById);
// router.get('/:buyerid/buyer-agents', buyerAgent.findByBuyerId);
router.post('/:buyerid/agents', validateSchema(buyerAgentSchema), buyer.createBuyerAgent);
router.put('/:buyerid/agents/:id', validateSchema(buyerAgentSchema), buyer.updateBuyerAgent);
router.delete('/:buyerid/agents/:id', buyer.deleteBuyerAgent);

//bankers
router.get('/:buyerid/bankers', buyer.getBuyerBankers);
router.get('/:buyerid/bankers/:id', buyer.getBuyerBankerById);
// router.get('/:buyerid/buyer-bankers', buyer.findByBuyerId);
router.post('/:buyerid/bankers', validateSchema(buyerBankersSchema), buyer.createBuyerBanker);
router.put('/:buyerid/bankers/:id', validateSchema(buyerBankersSchema), buyer.updateBuyerBanker);
router.delete('/:buyerid/bankers/:id', buyer.deleteBuyerBanker);

//buyer-contacts
router.get('/:buyerid/contacts', buyer.getBuyerContacts);
router.get('/:buyerid/contacts/:id', buyer.getBuyerContactById);
// router.get('/:buyerid/buyer-contacts', buyer.findByBuyerId);
router.post('/:buyerid/contacts', validateSchema(buyerContactsSchema), buyer.createBuyerContact);
router.put('/:buyerid/contacts/:id', validateSchema(buyerContactsSchema), buyer.updateBuyerContact);
router.delete('/:buyerid/contacts/:id', buyer.deleteBuyerContact);

//buyer-notes
router.get('/:buyerid/notes', buyer.getBuyerNotes);
router.get('/:buyerid/notes/:id', buyer.getBuyerNotesById);
//router.get('/:buyerid/buyer-notes', buyer.findByBuyerId);
router.post('/:buyerid/notes', validateSchema(buyerNotesSchema), buyer.createBuyerNote);
router.put('/:buyerid/notes/:id', validateSchema(buyerNotesSchema), buyer.updateBuyerNote);
router.delete('/:buyerid/notes/:id', buyer.deleteBuyerNote);

//instructions
router.get('/:buyerid/instructions', buyer.getBuyerInstructions);
router.get('/:buyerid/instructions/:id', buyer.getBuyerInstructionById);
// router.get('/:buyerid/buyer-instructions', buyer.findByBuyerId);
router.post('/:buyerid/instructions', validateSchema(buyerInstructionsSchema), buyer.createBuyerInstruction);
router.put('/:buyerid/instructions/:id', validateSchema(buyerInstructionsSchema), buyer.updateBuyerInstruction);
router.delete('/:buyerid/instructions/:id', buyer.deleteBuyerInstruction);

//terms
router.get('/:buyerid/terms', buyer.getBuyerTerms);
router.get('/:buyerid/terms/:id', buyer.getBuyerTermById);
// router.get('/:buyerid/buyer-terms', buyer.findByBuyerId);
router.post('/:buyerid/terms', validateSchema(buyerTermsSchema), buyer.createBuyerInstruction);
router.put('/:buyerid/terms/:id', validateSchema(buyerTermsSchema), buyer.updateBuyerInstruction);
router.delete('/:buyerid/terms/:id', buyer.deleteBuyerInstruction);

//sizes
router.get('/:buyerid/sizes', buyer.getBuyerSizes);
router.get('/:buyerid/sizes/:id', buyer.getBuyerSizeById);
// router.get('/:buyerid/buyer-sizes', buyer.findByBuyerId);
router.post('/:buyerid/sizes', validateSchema(buyerSizesSchema), buyer.createBuyerSize);
router.put('/:buyerid/sizes/:id', validateSchema(buyerSizesSchema), buyer.updateBuyerSize);
router.delete('/:buyerid/sizes/:id', buyer.deleteBuyerSize);

module.exports = router;