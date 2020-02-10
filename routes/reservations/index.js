const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
var cors = require('cors')

router.use(cors())

router.get('/', async (req,res) => {
  res.json(await Reservation.all());
});

router.post('/reservations', async (req, res) => {
  res.json(await Reservation.new(req));
});

module.exports = router;

