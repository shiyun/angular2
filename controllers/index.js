'use strict';
import jsonFormat from '../util/JsonFormat'

function Routes(){

}

Routes.prototype.ng2Ctrl = function(req, res){
	//this.redirect('/');
	let _data = {title: '首页', result: jsonFormat.success('消息1')};	
	res.render('index', _data);
}

module.exports = new Routes();