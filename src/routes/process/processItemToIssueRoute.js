const express = require('express');
const router = express.Router();

const process_item_to_issue = require('../../controllers/process/processItemToIssueController');

router.get('/', process_item_to_issue.findAll);
router.get('/:id', process_item_to_issue.findOne);
router.post('/', process_item_to_issue.create);
router.patch('/:id', process_item_to_issue.update);
router.delete('/:id', process_item_to_issue.delete);

module.exports = router;
