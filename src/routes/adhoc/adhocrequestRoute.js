const express =  require('express');
const router = express.Router();

const adhoc_request = require('../../controllers/adhoc/adhocrequestControlleer');

router.get('/', adhoc_request.findAll);
router.get('/:id', adhoc_request.findOne);
router.post('/', adhoc_request.create);
router.patch('/:id', adhoc_request.update);
router.delete('/:id', adhoc_request.delete);

module.exports  = router;