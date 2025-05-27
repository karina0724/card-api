const express = require('express');
const router = express.Router();
const controller = require('./card.controller');
const validate = require('../middlewares/validate');
const schema = require('./card.validation');

router.post('/', validate(schema.create), controller.create);
router.put('/:id', validate(schema.update), controller.update);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);

module.exports = router;
