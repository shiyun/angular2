'use strict';
import express from 'express'
import contrl from  '../controllers'

const router = express.Router();

router.get(/^\/ng\/?/, contrl.ng2Ctrl);

module.exports = router;