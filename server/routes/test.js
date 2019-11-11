const express = require('express')
const router = express.Router()
const Controller = require('../controllers/test')

router.route('/')
    .post(Controller.createNew)
    .get(Controller.getAll)

router.route('/:test_id')
    .get(Controller.getOne)
    .put(Controller.updateOne)
    .delete(Controller.deleteOne)

module.exports = router