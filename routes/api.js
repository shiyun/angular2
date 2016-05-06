'use strict';
import express from 'express'
import request from 'request'
import createRand from '../util/randSixNum'
import jsonFormat from '../util/jsonFormat'

const router = express.Router();

router.post('/getVeriCode', (req, res, next)=>{
	let rnd = createRand();
	req.session.veriCode = rnd;
	/*request.post('/xx', (err, data)=>{

	}).from(rnd);*/
	res.send(jsonFormat.success(rnd));

});

router.post('/apiLogin', (req, res, next)=>{	
	if(req.body.verifyCode == req.session.veriCode){		
		res.send(jsonFormat.success('登录成功'));
	}else{
		res.send(jsonFormat.fail(null, '登录失败'));
	}
});

router.post('/quan', (req, res, next)=>{
	let data = {"couponList":[{"effectiveTime":"2016-05-03","expirationTime":"2016-06-02","notice":"","status":"0","ticketAmount":"15.00","ticketId":"358","ticketName":"15元抵金券","ticketNo":"D15UARUKWAA","ticketScope":["0"],"ticketType":"1"},{"effectiveTime":"2016-05-03","expirationTime":"2016-06-02","notice":"","status":"0","ticketAmount":"15.00","ticketId":"357","ticketName":"15元抵金券","ticketNo":"001HLIFOKKP","ticketScope":["0"],"ticketType":"1"},{"effectiveTime":"2016-05-03","expirationTime":"2016-06-02","notice":"","status":"0","ticketAmount":"8.00","ticketId":"359","ticketName":"8元抵金券","ticketNo":"D14FSXUKWAA","ticketScope":["0"],"ticketType":"1"}]};
	res.send(jsonFormat.success(data));
});

router.post('/product', (req, res, next)=>{
	//let _url = 'http://api.alpha.haolawyers.cn/user/cardDetailInfo';
	let data = {"productDetailList":[{"basicPrice":"1.0","basicTimeLength":"0","billingModel":"0","evaluatePrice":"1.0","forcePushProduct":"1","midPic":"http://release-fbimages.oss.aliyuncs.com/lawyercard/2016/01/28/51C094C262E1D653DD055BFDC7CB22B5.png","picLargeUrl":"","picSmallUrl":"","priceDetailDesc":"咨询合伙、股权分配、公司章程、劳动人事等纠纷\r\n收费标准：15元/次，通话时长不足60秒不收费","productDesc":"资深公司法务律师为您服务\r\n工作经验：5年以上","productId":"1147","productName":"创业法律咨询","productType":"0","timeoutPrice":"0.0"},{"basicPrice":"0.1","basicTimeLength":"0","billingModel":"1","evaluatePrice":"1.6","forcePushProduct":"1","midPic":"http://fbimages.oss.aliyuncs.com/lawyercard/2016/05/03/6BAA207894E790B3AA832264EF368CC3.png","picLargeUrl":"","picSmallUrl":"","priceDetailDesc":"咨询合伙、股权分配、公司章程、劳动人事等纠纷\r\n收费标准：15元/次，通话时长不足60秒不收费","productDesc":"资深公司法务律师为您服务\r\n工作经验：5年以上","productId":"1184","productName":"创业法律咨询专家","productType":"0","timeoutPrice":"0.0"}]};
	res.send(jsonFormat.success(data));
});

router.post('/getParentId', (req, res, next)=>{
	let data = {parentProductId: global.CONFIG.parentProductId};
	res.send(jsonFormat.success(data));
})

module.exports = router;