const express = require('express');
const router = express.Router();

const {getHomeController,postHomeController} = require('./../controllers/homecontroller');


router.get('/', getHomeController)
router.post('/', postHomeController)

module.exports = router;