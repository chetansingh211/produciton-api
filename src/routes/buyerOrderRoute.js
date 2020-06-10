const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const ajv = new Ajv();

//Import controllers which hold CRUD methods foreach models
const buyerOrder = require('../controllers/buyerOrderController');

//importing schema
const buyerOrderSchema = require('../schema/buyer/buyer_orderSchema.json');
const buyerOrderStyleSchema = require('../schema/buyer/buyer_order_styleSchema.json');
const buyerOrderStyleColorSchema = require('../schema/buyer/buyer_order_style_colorSchema.json');
const buyerOrderInstructionSchema = require('../schema/buyer/buyer_order_instructionSchema.json');

// const buyerOrderShipmentScheduleSchema = require('../schema/buyer/buyer_order_shipment_scheduleSchema.json');

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

let validateSchema = (schema) => {
  return (req, res, next) => {
    let valid = ajv.validate(schema, req.body)
    if (!valid) {
      return res.status(422).send(errorResponse(ajv.errors))
    }
    next()
  }
}

//buyer-orders
router.get('/', buyerOrder.getBuyerOrders);
router.get('/:id', buyerOrder.getBuyerOrderById);
router.post('/', validateSchema(buyerOrderSchema), buyerOrder.createBuyerOrder);
router.put('/:id', validateSchema(buyerOrderSchema), buyerOrder.updateBuyerOrder);
router.delete('/:id', buyerOrder.deleteBuyerOrder);

//order-styles
router.get('/:buyerorderid/styles', buyerOrder.getBuyerOrderStyles);
router.get('/:buyerorderid/styles/:id', buyerOrder.getBuyerOrderStyleById);
router.post('/:buyerorderid/styles', validateSchema(buyerOrderStyleSchema), buyerOrder.createBuyerOrderStyle);
router.put('/:buyerorderid/styles/:id', validateSchema(buyerOrderStyleSchema), buyerOrder.updateBuyerOrderStyle);
router.delete('/:buyerorderid/styles/:id', buyerOrder.deleteBuyerOrderStyle);

//order-style-colors
router.get('/:buyerorderid/style/:styleid/color', buyerOrder.getBuyerOrderStyles);
router.get('/:buyerorderid/style/:styleid/color/:id', buyerOrder.getBuyerOrderStyleById);
router.post('/:buyerorderid/style/:styleid/color', validateSchema(buyerOrderStyleColorSchema), buyerOrder.createBuyerOrderStyle);
router.put('/:buyerorderid/style/:styleid/color/:id', validateSchema(buyerOrderStyleColorSchema), buyerOrder.updateBuyerOrderStyle);
router.delete('/:buyerorderid/style/:styleid/color/:id', buyerOrder.deleteBuyerOrderStyle);


//order-notes
router.get('/:buyerorderid/notes', buyerOrder.getBuyerOrderNotes);
router.get('/:buyerorderid/notes/:id', buyerOrder.getBuyerOrderNoteById);
router.post('/:buyerorderid/notes', buyerOrder.createBuyerOrderNote);
router.put('/:buyerorderid/notes/:id', buyerOrder.updateBuyerOrderNote);
router.delete('/:buyerorderid/notes/:id', buyerOrder.deleteBuyerOrderNote);


//instructions
router.get('/:buyerorderid/instructions/', buyerOrder.getBuyerOrderInstructions);
router.get('/:buyerorderid/instructions/:id', buyerOrder.getBuyerOrderInstructionById);
router.post('/:buyerorderid/instructions', validateSchema(buyerOrderInstructionSchema), buyerOrder.createBuyerOrderInstruction);
router.put('/:buyerorderid/instructions/:id', validateSchema(buyerOrderInstructionSchema), buyerOrder.updateBuyerOrderInstruction);
router.delete('/:buyerorderid/instructions/:id', buyerOrder.deleteBuyerOrderInstruction);

module.exports = router;