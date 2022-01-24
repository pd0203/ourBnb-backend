const express = require('express');
const router = express.Router();

const { roomController, roomDetailController, reservationController } = require('../controllers');

router.get('/', roomController.getRoomList);
router.get('/options', roomController.getOptions);

router.get('/detail', roomDetailController.getRoomDetail);

router.post('/reservation', reservationController.postReservation); 

module.exports = router;
