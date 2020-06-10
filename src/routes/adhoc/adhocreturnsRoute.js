const express =  require('express');
const router = express.Router();

const adhoc_returns= require('../../controllers/adhoc/adhocreturnsController');

router.get('/', adhoc_returns.findAll);
router.get('/:id', adhoc_returns.findOne);
router.post('/', adhoc_returns.create);
router.patch('/:id', adhoc_returns.update);
router.delete('/:id', adhoc_returns.delete);

module.exports = router;