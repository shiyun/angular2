'use strict';
import express from 'express'
import request from 'request'
import createRand from '../util/randSixNum'
import jsonFormat from '../util/jsonFormat'

const router = express.Router();

router.post('/getVeriCode', (req, res)=>{
	let rnd = createRand();
	req.session.veriCode = rnd;
	request.post('/xx', (err, data)=>{

	}).from(rnd);
	res.send(jsonFormat.success(rnd));

});

router.post('/apiLogin', (req, res)=>{	
	if(req.body.verifyCode == req.session.veriCode){		
		res.send(jsonFormat.success('登录成功'));
	}else{
		res.send(jsonFormat.fail(null, '登录失败'));
	}
});

module.exports = router;