const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const car_controller = require('../controller/car')


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', car_controller.test)
router.get('/_id/:id', car_controller.carForId)
router.get('/carMake/:carMake', car_controller.carForCarMake)
router.get('/', car_controller.carAll)
router.delete('/:id', car_controller.deleteForId)
router.put('/:id', car_controller.updateForId);
router.post('/', car_controller.create);


module.exports = router