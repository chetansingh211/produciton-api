const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const ajv = new Ajv();

//Import controllers which hold CRUD methods foreach models
const item = require('../controllers/itemController');

//importing schema
// const itemSchema = require('../schema/item/itemSchema.json');

// function errorResponse(schemaErrors) {
//     let errors = schemaErrors.map((error) => {
//       return {
//         path: error.dataPath,
//         message: error.message
//       }
//     })
//     return {
//       status: 'failed',
//       errors: errors
//     }
// }

// let validateSchema = (schemaName) => {
//     return (req, res, next) => {
//         let valid = ajv.validate(schemaName, req.body)
//         if (!valid) {
//             return res.status(422).send(errorResponse(ajv.errors))
//         }
//         next()
//     }
// }

//item
router.get('/', item.getItems);
router.get('/:id', item.getItemById);
router.post('/', item.createItem);
router.put('/:id', item.updateItem);
// router.post('/', validateSchema(itemSchema), item.createItem);
// router.put('/:id', validateSchema(itemSchema), item.updateItem);
router.delete('/:id', item.deleteItem);

//item-types
router.get('/types', item.getItemTypes);
router.get('/types/:id', item.getItemTypeById);
router.post('/types', item.createItemType);
router.put('/types/:id', item.updateItemType);
// router.post('/item-types', validateSchema(itemSchema), item.createItemType);
// router.put('/item-types/:id', validateSchema(itemSchema), item.updateItemType);
router.delete('/types/:id', item.deleteItemType);

// //item-notes
router.get('/notes', item.getItemNotes);
router.get('/notes/:id', item.getItemNoteById);
router.post('/notes', item.createItemNote);
router.put('/notes/:id', item.updateItemNote);
// router.post('/item-notes', validateSchema(itemSchema), item.createItemNote);
// router.put('/item-notes/:id', validateSchema(itemSchema), item.updateItemNote);
router.delete('/notes/:id', item.deleteItemNote);

module.exports = router;