'use strict';
class JsonFormat {
	constructor(){
		
	}

	success(result){
		return {status: {code: 1, desp: ""}, result: result}
	}

	fail(desp, result, code){
		let _code = code ? code : 0;
		return {status: {code: _code, desp: desp}, result: result}
	}
}

module.exports = new JsonFormat()